// @queries
import { getTotalNumberOfItems } from '../components/Header/queries';

export const defaults = {
    cartItems: [],
    totalNumberOfItems: 0,
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
            // Adding the cart items number that is displaying on the Header
            let { totalNumberOfItems } = cache.readQuery({ query: getTotalNumberOfItems });
            totalNumberOfItems += 1;
            cache.writeData({
                data: {
                    cartItems: defaults.cartItems.push({
                        name,
                        totalPrice,
                        totalToppings,
                        __typename: 'cartItem'
                    }),
                    totalNumberOfItems
                }
            });
            return null;
        },
        removeItemFromCart: (_, { index }, { cache }) => {
            // Removing cart items
            const defaultCartIems = defaults.cartItems;
            defaultCartIems.splice(index, 1);

            // Removing the cart items number that is displaying on the Header
            let { totalNumberOfItems } = cache.readQuery({ query: getTotalNumberOfItems });
            totalNumberOfItems -= 1;

            cache.writeData({
                data: {
                    cartItems: defaultCartIems,
                    totalNumberOfItems
                }
            });
            return null;
        }

    }
};
