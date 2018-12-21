import gql from 'graphql-tag';

export const updatePizzaSizeByName = gql`
    mutation updatePizzaSizeByName($selectedPizzaSizeFromMenu: String) {
        updatePizzaSizeByName(selectedPizzaSizeFromMenu: $selectedPizzaSizeFromMenu) @client
    }
`;
