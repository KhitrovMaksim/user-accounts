import { GraphQLCurrency } from 'graphql-scalars';
import db from '../_db.js';

export default {
  Currency: GraphQLCurrency,
  Query: {
    accounts() {
      return db.accounts;
    },
    account(_, args) {
      return db.accounts.find((account) => account.id === args.id);
    },
  },
  Account: {
    user(account) {
      return db.users.find((user) => user.id === account.user_id);
    },
  },
  Mutation: {
    addAccount(_, { account }) {
      const newAccount = { ...account, id: Math.floor(Math.random() * 10000).toString() };
      db.accounts.push(newAccount);
      return newAccount;
    },
    updateAccount(_, { edits, id }) {
      db.accounts = db.accounts.map((account) => {
        if (account.id === id) {
          return { ...account, ...edits };
        }
        return account;
      });
      return db.accounts.find((account) => account.id === id);
    },
    deleteAccount(_, args) {
      db.accounts = db.accounts.filter((account) => account.id !== args.id);
      return db.accounts;
    },
  },
};
