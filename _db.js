const users = [
  {
    id: '1',
    email: 'max1@max.max',
    password: 'admin',
  },
  {
    id: '2',
    email: 'max2@max.max',
    password: 'admin',
  },
  {
    id: '3',
    email: 'max3@max.max',
    password: 'admin',
  },
];

const accounts = [
  {
    id: '1',
    currency: 'EUR',
    balance: 102.5,
    status: 1,
    number: 1111222233334444,
    user_id: '1',
  },
  {
    id: '2',
    currency: 'USD',
    balance: 63.5,
    status: 1,
    number: 1111222233334444,
    user_id: '1',
  },
  {
    id: '3',
    currency: 'USD',
    balance: 63.5,
    status: 1,
    number: 1111222233334444,
    user_id: '2',
  },
];

export default { users, accounts };
