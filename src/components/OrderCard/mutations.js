import gql from 'graphql-tag';

export const addItemToCart = gql`
    mutation addItemToCart (
        $name: String,
        $totalPrice: Int,
        $totalToppings: Int,
        ) {
        addItemToCart(
            name: $name,
            totalPrice: $totalPrice,
            totalToppings: $totalToppings,
        ) @client
    }
`;
