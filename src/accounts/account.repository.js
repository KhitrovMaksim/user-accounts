import prisma from '../database/client.database.js';

class AccountRepository {
  async findAccounts() {
    return prisma.account.findMany();
  }

  async findAccountsByUserId(userId) {
    const accounts = await prisma.account.findMany({
      where: {
        userId,
      },
    });

    return accounts;
  }

  async findAccountById(id) {
    return prisma.account.findUnique({
      where: {
        id,
      },
    });
  }

  async insertAccount(newAccountDto) {
    return prisma.account.create({
      data: newAccountDto,
    });
  }

  async updateAccountStatus(updateStatusAccountDto) {
    return prisma.account.update({
      where: {
        id: updateStatusAccountDto.id,
      },
      data: {
        status: updateStatusAccountDto.status,
      },
    });
  }

  async deleteAccountById(id) {
    const deletedAccount = await prisma.account.delete({
      where: {
        id,
      },
    });
    return deletedAccount;
  }
}

export const accountRepository = new AccountRepository();
