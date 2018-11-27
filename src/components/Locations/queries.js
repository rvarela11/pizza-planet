import gql from 'graphql-tag';

export const getCities = gql`
    query getCities($cityInputValue: String) {
        Cities (cityInputValue: $cityInputValue) {
          id
          name
          airport_code
          multi_car_display_name
          description
        }
    }
`;

export const getCityInputValueFromState = gql`
    query getCityInputValueFromState {
        cityInputValue @client
    }
`;
