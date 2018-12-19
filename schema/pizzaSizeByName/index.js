// @vendors
const graphql = require('graphql');
const axios = require('axios');
const {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} = graphql;

const ToppingsType = new GraphQLObjectType({
    name: 'ToppingsType',
    fields: {
        topping: {type: new GraphQLObjectType({
            name: 'ToppingType',
            fields: {
                name: { type: GraphQLString },
                price: { type: GraphQLFloat }
            }
          })},
        defaultSelected: { type: GraphQLBoolean}
    }
  });

const PizzaSizeByNameType = new GraphQLObjectType({
    name: 'pizzaSizeByName',
    fields: {
      name: { type: GraphQLString },
      maxToppings: { type: GraphQLInt },
      basePrice: { type: GraphQLFloat },
      toppings: { type: new GraphQLList(ToppingsType)}
    }
});

const URL = 'http://core-graphql.dev.waldo.photos/pizza';

const pizzaSizeByNameResolver = (parentValue, args) => axios({
    url: URL,
    method: 'post',
    data: {
      query: `
        query {
            pizzaSizeByName(name: ${args.name}) {
                name
                maxToppings
                basePrice
                toppings {
                    topping {
                        name
                        price
                    }
                    defaultSelected
                }
            }
        }
        `
    }
  })
  .then(response => response.data.data.pizzaSizeByName)
  .catch(console.log('Error'));

module.exports = {
    PizzaSizeByNameType,
    pizzaSizeByNameResolver
};