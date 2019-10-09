import { GraphQLServer, Options } from 'graphql-yoga';

import { connectDB } from './db';
import models from './db/models';
import resolvers from './graphql/resolvers';
import { ENV } from './env';

const context = {
    models,
};

const options: Options = {
    port: ENV.PORT,
    endpoint: '/graphql',
    playground: '/playground',
    subscriptions: false,
    tracing: true,
};

const server = new GraphQLServer({
    typeDefs: `${__dirname}/graphql/schema.graphql`,
    resolvers,
    context,
});

connectDB();
server.start(options, ({ port }) =>
    // tslint:disable-next-line
    console.log(`Server is running on localhost:${port}`),
);
