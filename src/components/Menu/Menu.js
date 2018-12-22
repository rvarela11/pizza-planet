// @vendors
import React from 'react';
import { Query } from 'react-apollo';

// @components
import MenuCard from '../MenuCard/MenuCard';

// @queries
import { getPizzas } from './queries';

// @styles
import './Menu.scss';

const Menu = () => (
    <Query query={getPizzas} fetchPolicy="network-only">
        {({ data: { pizzaSizes }, loading }) => {
            if (loading) return null;
            return (
                <div className="menu__selection">
                    <h3 className="menu__title">MENU</h3>
                    <div className="menu">
                        <div className="menu__list">
                            { pizzaSizes.map((item, index) => <MenuCard key={index} item={item} />) }
                        </div>
                    </div>
                </div>
            );
        }}
    </Query>
);

export default Menu;
