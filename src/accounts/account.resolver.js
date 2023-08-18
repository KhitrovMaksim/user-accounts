import { GraphQLCurrency } from 'graphql-scalars';
import { accountService } from './account.service.js';
import { userService } from '../users/user.service.js';
import { NewAccountDto } from './dtos/new-account.dto.js';
import { UpdateAccountStatusDto } from './dtos/update-account-status.dto.js';
import { AccountsPaginationDto } from './dtos/accounts-pagination.dto.js';

export default {
  Currency: GraphQLCurrency,
  Query: {
    async accounts() {
      return accountService.getAllAccounts();
    },
    async account(_, { id }) {
      return accountService.getAccountById(id);
    },
    async accountsPagination(_, { pagination }) {
      const accountPaginationDto = new AccountsPaginationDto(pagination);
      return accountService.getAccountsByLimitAndPage(accountPaginationDto);
    },
  },
  Account: {
    user({ userId }) {
      return userService.getUserById(userId);
    },
  },
  Mutation: {
    async addAccount(_, { account }) {
      const newAccountDto = new NewAccountDto(account);
      const newAccount = await accountService.createAccount(newAccountDto);
      return newAccount;
    },
    async updateAccount(_, { edits, id }) {
      const { status } = edits;
      const updateAccountStatusDto = new UpdateAccountStatusDto({ id, status });
      return accountService.editAccountStatus(updateAccountStatusDto);
    },
    async deleteAccount(_, { id }) {
      return accountService.deleteAccount(id);
    },
  },
};
