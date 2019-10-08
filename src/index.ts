import { GraphQLServer, Options } from 'graphql-yoga';

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`;

const resolvers = {
    Query: {
        hello(_: any, { name }: any) {
            return `Hello ${name || 'World'}`;
        },
    },
};

const options: Options = {
    port: 3000,
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, ({ port }) =>
    console.log(`Server is running on localhost:${port}`),
);
