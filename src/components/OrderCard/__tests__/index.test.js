// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import OrderCard from '../OrderCard';

describe('OrderCard Container', () => {
    it('renders OrderCard without crashing', () => {
        shallow(
            <OrderCard
                data={{}}
            />
        );
    });
});
