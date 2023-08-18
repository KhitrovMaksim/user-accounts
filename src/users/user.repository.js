import prisma from '../database/client.database.js';

class UserRepository {
  async findUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  async findUserById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async findUserByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async insertUser(newUserDto) {
    const user = await prisma.user.create({
      data: {
        email: newUserDto.email,
        password: newUserDto.password,
      },
    });
    return user;
  }
}

export const userRepository = new UserRepository();
