import http from 'http';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// eslint-disable-next-line import/extensions
import { typeDefs, resolvers } from './schema.js';

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  '/',
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

// eslint-disable-next-line no-promise-executor-return
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

// eslint-disable-next-line no-console
console.log('🚀 Server ready at http://localhost:4000/');
