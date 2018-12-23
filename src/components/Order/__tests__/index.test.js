// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Order from '../Order';

describe('Order Container', () => {
    it('renders Order without crashing', () => {
        shallow(<Order />);
    });
});
