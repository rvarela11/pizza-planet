// @vendors
import React from 'react';
import { Query } from 'react-apollo';

// @components
import Card from '../Card/Card';

// @queries
import { getPizzas } from './queries';

// @styles
import './Pizzas.scss';

const Pizzas = () => (
    <Query query={getPizzas}>
        {({ data: { pizzaSizes }, loading }) => {
            if (loading) {
                pizzaSizes = [];
            }
            return (
                    <div className="pizzas__selection">
                        <h3 className="pizzas__title">MENU</h3>
                        <div className="pizzas">
                            <div className="pizzas__list">
                                { pizzaSizes.map((item,index) => <Card key={index} item={item} />) }
                            </div>
                        </div>
                    </div>
            );
        }}
    </Query>
);

export default Pizzas;
