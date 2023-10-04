import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
// eslint-disable-next-line import/extensions
import resolvers from './resolvers.js';

// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync('./src/schema.graphql', 'utf8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}/graphql`);
