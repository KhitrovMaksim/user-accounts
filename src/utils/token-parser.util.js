import jwt from 'jsonwebtoken';

const { verify } = jwt;
export class TokenParserUtil {
  static jwtSecret = process.env.JWT_SECRET;

  static getUser(authorizationHeader) {
    if (!authorizationHeader) return null;
    const bearer = authorizationHeader.split(' ')[0];
    const token = authorizationHeader.split(' ')[1];
    if (bearer === 'Bearer' && token) {
      return verify(token, this.jwtSecret);
    }

    return null;
  }
}
