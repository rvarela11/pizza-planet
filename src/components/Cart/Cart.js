// @vendors
import React from 'react';

// @components
import CartCard from '../CartCard/CartCard';

// @styles
import './Cart.scss';

const Cart = () => (
    <div className="cart__selection">
        <h3 className="cart__title">CART</h3>
        <CartCard />
    </div>
);

export default Cart;
