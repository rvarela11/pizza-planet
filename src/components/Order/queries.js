import gql from 'graphql-tag';

export const getPizzaSizeByNameFromState = gql`
    query getPizzaSizeByNameFromState {
        selectedPizzaSizeFromMenu @client
    }
`;

export const getPizzaSizeByName = gql`
    query getPizzaSizeByName($selectedPizzaSizeFromMenu: String) {
        pizzaSizeByName(name: $selectedPizzaSizeFromMenu) {
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
