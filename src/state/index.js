export const defaults = {
    cartItems: [],
    selectedPizzaSizeFromMenu: null
};

export const resolvers = {
    Mutation: {
        updatePizzaSizeByName: (_, { selectedPizzaSizeFromMenu }, { cache }) => {
            cache.writeData({
                data: {
                    selectedPizzaSizeFromMenu: selectedPizzaSizeFromMenu.toUpperCase()
                }
            });
            return null;
        },
        addItemToCart: (_, { name, totalPrice, totalToppings }, { cache }) => {
            cache.writeData({
                data: {
                    cartItems: defaults.cartItems.push({
                        name,
                        totalPrice,
                        totalToppings,
                        __typename: 'cartItem'
                    })
                }
            });
            return null;
        },
        removeItemFromCart: (_, { index }, { cache }) => {
            const defaultCartIems = defaults.cartItems;
            defaultCartIems.splice(index, 1);
            
            cache.writeData({
                data: {
                    cartItems: defaultCartIems
                }
            });
            return null;
        }

    }
};
