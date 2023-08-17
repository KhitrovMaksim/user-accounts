import { GraphQLBigInt, GraphQLCurrency, GraphQLEmailAddress } from 'graphql-scalars';
// eslint-disable-next-line import/extensions
import db from './_db.js';

// eslint-disable-next-line no-unused-vars
const resolveFunctions = {
  BigInt: GraphQLBigInt,
  Currency: GraphQLCurrency,
  Email: GraphQLEmailAddress,
};

export const typeDefs = `#graphql
  scalar BigInt
  scalar Currency
  scalar Email

  type User {
    id: ID!
    email: Email!
    password: String!
    accounts: [Account!]
  }

  type Account {
    id: ID!
    currency: Currency!
    balance: Float!
    status: Boolean!
    number: BigInt!
    user: User!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    accounts: [Account]
    account(id: ID!): Account
  }


`;

export const resolvers = {
  Query: {
    users() {
      return db.users;
    },
    accounts() {
      return db.accounts;
    },
    user(_, args) {
      return db.users.find((user) => user.id === args.id);
    },
    account(_, args) {
      return db.accounts.find((account) => account.id === args.id);
    },
  },
  User: {
    accounts(parent) {
      return db.accounts.filter((userAccounts) => userAccounts.user_id === parent.id);
    },
  },
};
