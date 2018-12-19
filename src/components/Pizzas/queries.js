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

export const getPizzaSizeByName = gql`
    query getPizzaSizeByName($name: String) {
        pizzaSizeByName(name: $name) {
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
`;


