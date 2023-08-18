import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import userType from './users/user.type.js';
import accountType from './accounts/account.type.js';
import userResolver from './users/user.resolver.js';
import accountResolver from './accounts/account.resolver.js';

const typesList = [userType, accountType];
const resolversList = [userResolver, accountResolver];

export const typeDefs = mergeTypeDefs(typesList);
export const resolvers = mergeResolvers(resolversList);
