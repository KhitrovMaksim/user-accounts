import { and, shield } from 'graphql-shield';
import {
  addAccountValidation,
  isAuthenticated,
  loginValidation,
  registrationValidation,
  updateAccountValidation,
} from './rules.js';

const permissions = shield(
  {
    Query: {
      accounts: isAuthenticated,
      account: isAuthenticated,
      users: isAuthenticated,
      user: isAuthenticated,
    },
    Account: {
      user: isAuthenticated,
    },
    Mutation: {
      addAccount: and(isAuthenticated, addAccountValidation),
      updateAccount: and(isAuthenticated, updateAccountValidation),
      deleteAccount: isAuthenticated,
      registration: registrationValidation,
      login: loginValidation,
    },
  },
  {
    allowExternalErrors: true,
    debug: true,
  },
);

export default permissions;
