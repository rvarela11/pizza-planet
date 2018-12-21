import gql from 'graphql-tag';

export const getCartItems = gql`
    query getCartItems {
        cartItems @client {
            name
            totalPrice
            totalToppings
        }
    }
`;
