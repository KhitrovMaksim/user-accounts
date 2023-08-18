export class LoginUserDto {
  email;

  password;

  constructor(userData) {
    this.email = userData.email;
    this.password = userData.password;
  }
}
