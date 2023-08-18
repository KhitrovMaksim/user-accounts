const AccountType = `
  scalar Currency

  type Account {
    id: ID!
    currency: Currency!
    balance: Float!
    status: Int!
    number: String!
    user: User!
  }

  type Query {
    accounts: [Account]
    account(id: ID!): Account
  }

  type Mutation {
    addAccount(account: AddAccountInput!): Account
    updateAccount(id: ID!, edits: EditAccountInput): Account
    deleteAccount(id: ID!): [Account]
  }

  input AddAccountInput {
    currency: Currency!
    balance: Float!
    status: Int!
    number: String!
    user_id: ID!
  }

  input EditAccountInput {
    status: Int!
  }
`;

export default () => AccountType;
