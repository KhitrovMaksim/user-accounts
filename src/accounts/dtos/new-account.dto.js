export class NewAccountDto {
  currency;

  balance;

  status;

  number;

  userId;

  constructor(accountData) {
    this.currency = accountData.currency;
    this.balance = accountData.balance;
    this.status = accountData.status;
    this.number = accountData.number;
    this.userId = accountData.userId;
  }
}
