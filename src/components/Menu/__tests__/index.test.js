// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Menu from '../Menu';

describe('Menu Container', () => {
    it('renders Menu without crashing', () => {
        shallow(<Menu />);
    });
});
