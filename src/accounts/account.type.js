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
    accountsPagination(pagination: AccountPaginatorInput): AccountPaginator
    account(id: ID!): Account
  }

  type AccountPaginator {
    accounts: [Account]
    accountsAmount: Int!
    currentPage: Int!
    totalPages: Int!
  }

  input AccountPaginatorInput {
    page: Int!
    limit: Int!
  }

  type Mutation {
    addAccount(account: AddAccountInput!): Account
    updateAccount(id: ID!, edits: EditAccountInput): Account
    deleteAccount(id: ID!): Account
  }

  input AddAccountInput {
    currency: Currency!
    balance: Float!
    status: Int!
    number: String!
    userId: ID!
  }

  input EditAccountInput {
    status: Int!
  }
`;

export default () => AccountType;
