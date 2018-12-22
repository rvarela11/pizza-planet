import gql from 'graphql-tag';

export const getTotalNumberOfItems = gql`
    query getTotalNumberOfItems {
        totalNumberOfItems @client
    }
`;
