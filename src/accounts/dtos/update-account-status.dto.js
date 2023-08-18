export class UpdateAccountStatusDto {
  id;

  status;

  constructor(accountData) {
    this.id = accountData.id;
    this.status = accountData.status;
  }
}
