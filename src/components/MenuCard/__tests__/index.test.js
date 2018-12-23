// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import MenuCard from '../MenuCard';

describe('MenuCard Container', () => {
    it('renders MenuCard without crashing', () => {
        shallow(
            <MenuCard
                key={1}
                item={{}}
            />
        );
    });
});
