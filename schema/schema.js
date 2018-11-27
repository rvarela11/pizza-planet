const graphql = require('graphql');

const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} = graphql;

const { CitiesType, citiesResolver } = require('./cities');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Cities: {
            resolve: citiesResolver,
            args: {
                cityInputValue: { type: GraphQLString }
            },
            type: new GraphQLList(CitiesType)
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
