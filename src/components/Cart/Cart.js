// @vendors
import React from 'react';
import { Query, Mutation } from 'react-apollo';

// @components
import CartCard from '../CartCard/CartCard';

// @queries
import { getCartItems } from './queries';

// @mutations
import { removeItemFromCart } from './mutations';

// @styles
import './Cart.scss';

const Cart = () => (
    <Query query={getCartItems}>
        {({ data: { cartItems }, loading, refetch }) => {
            if (loading) return null;
            return (
                <div className="cart__selection">
                    <h3 className="cart__title">CART</h3>
                    <Mutation mutation={removeItemFromCart}>
                        {removeItemFromCart => (
                            <CartCard
                                cartItems={cartItems}
                                removeItem={(index) => {
                                    removeItemFromCart({ variables: { index } });
                                    refetch();
                                }}
                            />
                        )}
                    </Mutation>
                </div>
            );
        }}
    </Query>
);

export default Cart;
