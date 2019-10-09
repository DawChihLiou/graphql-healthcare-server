const resolvers = {
    Query: {
        async providers(parent: any, args: any, { models }: any) {
            const Providers = await models.Provider.find().limit(args.first);
            return Providers;
        },
    },
};

export default resolvers;
