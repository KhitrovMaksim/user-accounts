import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { userRepository } from './user.repository.js';

class UserService {
  async registration(newUserDto) {
    const userAlreadyExist = await userRepository.findUserByEmail(newUserDto.email);
    if (userAlreadyExist) {
      throw Error('User already exist.'); // TODO exception handling
    }
    const hashedPassword = await argon2.hash(newUserDto.password);
    return userRepository.insertUser({ ...newUserDto, password: hashedPassword });
  }

  async login(loginUserDto) {
    const user = await userRepository.findUserByEmail(loginUserDto.email);
    if (!user) {
      throw Error('User not exist.'); // TODO exception handling
    }
    if (!(await argon2.verify(user.password, loginUserDto.password))) {
      throw Error('Incorrect password.'); // TODO exception handling
    }
    const { sign } = jwt;
    const jwtSecret = process.env.JWT_SECRET;
    const token = sign({ user }, jwtSecret, { expiresIn: '24h' });

    return {
      user,
      token,
    };
  }

  async getAllUsers() {
    return userRepository.findUsers();
  }

  async getUserById(id) {
    return userRepository.findUserById(id);
  }
}

export const userService = new UserService();
