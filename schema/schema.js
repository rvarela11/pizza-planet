const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString
} = graphql;

const { PizzaSizesType, pizzaSizesResolver } = require('./pizzaSizes');
const { PizzaSizeByNameType, pizzaSizeByNameResolver } = require('./pizzaSizeByName');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        pizzaSizes: {
            resolve: pizzaSizesResolver,
            type: new GraphQLList(PizzaSizesType)
        },
        pizzaSizeByName: {
            args: {
                name: { type: GraphQLString }
            },
            resolve: pizzaSizeByNameResolver,
            type: PizzaSizeByNameType
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
