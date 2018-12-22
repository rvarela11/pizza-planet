import gql from 'graphql-tag';

export const removeItemFromCart = gql`
    mutation removeItemFromCart (
        $index: Int
        ) {
        removeItemFromCart(
            index: $index
        ) @client
    }
`;
