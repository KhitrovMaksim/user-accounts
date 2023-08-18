import { accountRepository } from './account.repository.js';

class AccountService {
  async getAllAccounts() {
    return accountRepository.findAccounts();
  }

  async getAccountsByUserID(userId) {
    return accountRepository.findAccountsByUserId(userId);
  }

  async getAccountById(id) {
    return accountRepository.findAccountById(id);
  }

  async createAccount(newAccountDto) {
    return accountRepository.insertAccount(newAccountDto);
  }

  async editAccountStatus(updateStatusAccountDto) {
    return accountRepository.updateAccountStatus(updateStatusAccountDto);
  }

  async deleteAccount(id) {
    return accountRepository.deleteAccountById(id);
  }

  async getAccountsByLimitAndPage(accountPaginationDto) {
    const accounts = await accountRepository.findAccounts();
    const startIndex = (accountPaginationDto.page - 1) * accountPaginationDto.limit;
    const endIndex = accountPaginationDto.page * accountPaginationDto.limit;
    const result = accounts.slice(startIndex, endIndex);
    return {
      accounts: result,
      accountsAmount: accounts.length,
      currentPage: accountPaginationDto.page,
      totalPages: Math.ceil(accounts.length / accountPaginationDto.limit),
    };
  }
}

export const accountService = new AccountService();
