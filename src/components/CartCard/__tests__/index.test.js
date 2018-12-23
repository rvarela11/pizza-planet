// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import CartCard from '../CartCard';

describe('CartCard Container', () => {
    it('renders CartCard without crashing', () => {
        shallow(
            <CartCard
                cartItems={[]}
                removeItem={() => {}}
            />
        );
    });
});
