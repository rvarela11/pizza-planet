// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Locations from '../Locations';

describe('Locations Container', () => {
    it('renders Locations without crashing', () => {
        shallow(
            <Locations />
        );
    });
});
