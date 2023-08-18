export class AccountsPaginationDto {
  page;

  limit;

  constructor(pagination) {
    this.page = pagination.page;
    this.limit = pagination.limit;
  }
}
