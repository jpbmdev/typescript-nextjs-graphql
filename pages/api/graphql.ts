import { ApolloServer, gql, IResolvers } from 'apollo-server-micro';
import mysql from 'serverless-mysql';

const typeDefs = gql`
  enum TaskStatus {
    active
    completed
  }

  input CreateTaskInput {
    title: String!
  }

  input UpdateTaskInput{
    id: Int!,
    title: String
    status: TaskStatus
  }

  type Task {
    id: Int!
    title: String!
    status: TaskStatus!
  }

  type Query {
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput): Task
    deleteTask(id: Int!): Task
  }
`

interface ApolloContext {
  db: mysql.ServerlessMysql;
}

const resolvers: IResolvers<any, ApolloContext> = {
  Query: {
    async tasks(parent, args, context) {
      const result = await context.db.query(
        'SELECT "HELLO WORLD" as hello_world'
      );
      await db.end();
      console.log(result)
      return []
    },
    task(parent, args, context) {
      return null;
    }
  },
  Mutation: {
    createTask(parent, args, context) {
      return null;
    },
    updateTask(parent, args, context) {
      return null;
    },
    deleteTask(parent, args, context) {
      return null;
    }
  }
}

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD
  }
})

const apolloServer = new ApolloServer({ typeDefs, resolvers, context: { db } });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
