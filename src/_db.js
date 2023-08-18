const users = [
  {
    id: '1',
    email: 'max1@max.max',
    password: 'admin',
  },
  {
    id: '2',
    email: 'max2@max.max',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$2f/lROtoBWuRfYJL7xF2dg$GLxkpqHNpp5b5C0eDvRFdIoWoQ9EFy6+w7L2A0/3K/8',
  },
  {
    id: '3',
    email: 'max3@max.max',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$2f/lROtoBWuRfYJL7xF2dg$GLxkpqHNpp5b5C0eDvRFdIoWoQ9EFy6+w7L2A0/3K/8',
  },
];

const accounts = [
  {
    id: '1',
    currency: 'EUR',
    balance: 102.5,
    status: 1,
    number: '1111222233334444',
    user_id: '1',
  },
  {
    id: '2',
    currency: 'USD',
    balance: 63.5,
    status: 1,
    number: '1111222233334444',
    user_id: '1',
  },
  {
    id: '3',
    currency: 'USD',
    balance: 63.5,
    status: 1,
    number: '1111222233334444',
    user_id: '2',
  },
];

export default { users, accounts };
