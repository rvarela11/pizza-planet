import gql from 'graphql-tag';

export const getPizzas = gql`
    query getPizzas {
        pizzaSizes {
          name
          maxToppings
          basePrice
        }
    }
`;
