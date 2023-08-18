const UserType = `
  scalar Email

  type User {
    id: ID!
    email: Email!
    password: String!
    accounts: [Account!]
  }

  type AuthPayload {
    user: User
    token: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    registration(user: registrationInput!): User
    login(loginData: loginInput!): AuthPayload
  }

  input registrationInput {
    email: Email!
    password: String!
    confirmPassword: String!
  }

  input loginInput {
    email: Email!
    password: String!
  }
`;

export default () => UserType;
