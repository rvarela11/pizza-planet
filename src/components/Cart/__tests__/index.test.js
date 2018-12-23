// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Cart from '../Cart';

describe('Cart Container', () => {
    it('renders Cart without crashing', () => {
        shallow(<Cart />);
    });
});
