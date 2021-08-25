import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../backend/schema';
import { db } from '../../backend/db';

const apolloServer = new ApolloServer({ schema, context: { db } });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
