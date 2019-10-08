import { GraphQLServer, Options } from 'graphql-yoga';

import { connectDB } from './db';
import models from './db/models';
import resolvers from './graphql/resolvers';

const db = connectDB();

const context = {
    db,
    models,
};

const options: Options = {
    port: 3000,
};

const server = new GraphQLServer({
    typeDefs: `${__dirname}/graphql/schema.graphql`,
    resolvers,
    context,
});

server.start(options, ({ port }) =>
    // tslint:disable-next-line
    console.log(`Server is running on localhost:${port}`),
);
