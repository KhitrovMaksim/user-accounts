import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { GraphQLEmailAddress } from 'graphql-scalars';
import db from '../_db.js';

const jwtSecret = process.env.JWT_SECRET;
const { sign } = jwt;
export default {
  Email: GraphQLEmailAddress,
  Query: {
    users() {
      return db.users;
    },
    user(_, args) {
      return db.users.find((user) => user.id === args.id);
    },
  },
  User: {
    accounts(user) {
      return db.accounts.filter((userAccounts) => userAccounts.user_id === user.id);
    },
  },
  Mutation: {
    async registration(_, { user }) {
      const { email, password } = user;

      const userAlreadyExist = db.users.find((u) => u.email === email);
      if (userAlreadyExist) {
        throw Error('User already exist.'); // TODO exception handling
      }
      const hashedPassword = await argon2.hash(password);
      const newUser = {
        email,
        password: hashedPassword,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.users.push(newUser);

      return newUser;
    },
    async login(_, { loginData }) {
      const { email, password } = loginData;
      const user = db.users.find((u) => u.email === email);
      if (!user) {
        throw Error('User not exist.'); // TODO exception handling
      }
      if (!(await argon2.verify(user.password, password))) {
        throw Error('Incorrect password.'); // TODO exception handling
      }
      const token = sign({ user }, jwtSecret, { expiresIn: '24h' });
      return {
        user,
        token,
      };
    },
  },
};
