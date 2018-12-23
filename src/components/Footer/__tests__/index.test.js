// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Footer from '../Footer';

describe('Footer Container', () => {
    it('renders Footer without crashing', () => {
        shallow(<Footer />);
    });
});
