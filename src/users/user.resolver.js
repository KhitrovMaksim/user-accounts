import { GraphQLEmailAddress } from 'graphql-scalars';
import { NewUserDto } from './dtos/new-user.dto.js';
import { userService } from './user.service.js';
import { LoginUserDto } from './dtos/login-user.dto.js';
import { accountService } from '../accounts/account.service.js';

export default {
  Email: GraphQLEmailAddress,
  Query: {
    async users() {
      return userService.getAllUsers();
    },
    async user(_, { id }) {
      return userService.getUserById(id);
    },
  },
  User: {
    async accounts(user) {
      return accountService.getAccountsByUserID(user.id);
    },
  },
  Mutation: {
    async registration(_, { user }) {
      const newUserDto = new NewUserDto(user);
      const newUser = await userService.registration(newUserDto);
      return newUser;
    },
    async login(_, { loginData }) {
      const loginUserDto = new LoginUserDto(loginData);
      return userService.login(loginUserDto);
    },
  },
};
