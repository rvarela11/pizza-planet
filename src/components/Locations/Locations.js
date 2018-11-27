// @vendors
import React from 'react';
import { Query, Mutation } from 'react-apollo';

// @components
import Card from '../Card/Card';
import Search from '../Search/Search';

// @queries
import { getCities, getCityInputValueFromState } from './queries';

// @mutations
import { updateCityInputValue } from './mutations';

// @state
import { defaults } from '../../state';

// @styles
import './Locations.scss';

const Locations = () => (
    <Query query={getCityInputValueFromState}>
        {({ data: { cityInputValue }, loading }) => {
            if (loading) {
                /*eslint-disable */
                cityInputValue = defaults.cityInputValue;
                /* eslint-enable */
            }
            return (
                <Query
                    query={getCities}
                    variables={{ cityInputValue }}
                >
                    {({ data: { Cities }, loading }) => {
                        if (loading) {
                            /*eslint-disable */
                            Cities = defaults.apiDataAllFiltered;
                            /* eslint-enable */
                        }
                        return (
                            <div className="locations__selection">
                                <h3 className="locations__title">Choose Location</h3>
                                <Mutation mutation={updateCityInputValue}>
                                    {updateCityInputValue => (
                                        <Search handleOnChangeSearch={cityInputValue => updateCityInputValue({ variables: { cityInputValue } })} />
                                    )}
                                </Mutation>
                                <div className="locations">
                                    <div className="locations__list">
                                        { Cities.map(item => <Card key={item.id} item={item} />) }
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </Query>
            );
        }}
    </Query>
);

export default Locations;
