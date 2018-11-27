export const defaults = {
    apiDataAllFiltered: [],
    bookingFooterNavLabels: ['CITY', 'DATES', 'VEHICLE', 'COVERAGE'],
    cityInputValue: ''
};

export const resolvers = {
    Mutation: {
        updateCityInputValue: (_, { cityInputValue }, { cache }) => {
            cache.writeData({
                data: {
                    cityInputValue
                }
            });
            return null;
        }
    }
};
