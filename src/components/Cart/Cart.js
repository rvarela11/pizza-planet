// @vendors
import React from 'react';
import { Query } from 'react-apollo';

// @queries
import { getCartItems } from './queries';

// @styles
import './Cart.scss';

const Cart = () => (
    <Query query={getCartItems}>
        {({ data, loading }) => {
            // if (loading) return null;
            console.log(data);
            return (
                <div className="cart__selection">
                    <h3 className="cart__title">CART</h3>
                </div>
            );
        }}
    </Query>
);

export default Cart;
