// @vendors
const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} = graphql;

const PizzaSizesType = new GraphQLObjectType({
    name: 'pizzaSizes',
    fields: {
        name: { type: GraphQLString },
        maxToppings: { type: GraphQLInt },
        basePrice: {
            type: GraphQLString,
            resolve: data => `$${data.basePrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
    }
});

const URL = 'http://core-graphql.dev.waldo.photos/pizza';

const pizzaSizesResolver = () => axios({
    url: URL,
    method: 'get',
    data: {
        query: `
        query {
            pizzaSizes {
                name
                maxToppings
                basePrice
            }
        }
        `
    }
})
    .then(response => response.data.data.pizzaSizes)
    .catch(console.log('Error'));

module.exports = {
    PizzaSizesType,
    pizzaSizesResolver
};
