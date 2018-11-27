const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} = graphql;

const CitiesType = new GraphQLObjectType({
    name: 'Cities',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        airport_code: { type: GraphQLString },
        multi_car_display_name: { type: GraphQLString },
        description: { type: GraphQLString }
    }
});

const ax = axios.create({
    baseURL: 'http://localhost:3000'
});

const citiesResolver = (parentValue, args) => ax.get('locations.json')
    .then((response) => {
        const apiDataNoQ5NoA5C = response.data.filter(({ name }) => !name.match(/(Q5|A5C)/));

        if (args.cityInputValue) {
            const lowerCaseValue = args.cityInputValue.toLowerCase();
            /*eslint-disable */
            const searchResults = apiDataNoQ5NoA5C.filter(({ airport_code, name }) => {
                const airportCode = airport_code || '';
                return airportCode.toLowerCase().includes(lowerCaseValue) || name.toLowerCase().includes(lowerCaseValue);
            });
            /* eslint-enable */
            return searchResults;
        }
        return apiDataNoQ5NoA5C;
    })
    .catch(error => console.log('Error', error));

module.exports = {
    CitiesType,
    citiesResolver
};
