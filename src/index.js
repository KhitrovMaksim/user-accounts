import http from 'http';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { applyMiddleware } from 'graphql-middleware';
import { typeDefs, resolvers } from './schema.js';
import { TokenParserUtil } from './utils/token-parser.util.js';
import permissions from './access/permissions.js';

const port = process.env.PORT;
const app = express();
const httpServer = http.createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithPermissions = applyMiddleware(schema, permissions);
const server = new ApolloServer({
  schema: schemaWithPermissions,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  '/',
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ user: TokenParserUtil.getUser(req.headers.authorization) }),
  }),
);

// eslint-disable-next-line no-promise-executor-return
await new Promise((resolve) => httpServer.listen({ port }, resolve));
