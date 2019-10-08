const resolvers = {
    Query: {
        async providers(parent: any, args: any, { models }: any) {
            const Providers = await models.Provider.find({});
            return Providers;
        },
    },
};

export default resolvers;
