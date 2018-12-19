// @vendors
import React from 'react';
import { Query } from 'react-apollo';

// @queries
import { getPizzas } from './queries';

const Pizzas = () => (
    <Query query={getPizzas}>
        {({ data, loading }) => {
            return (
              <h2>Pizzas</h2>
            );
        }}
    </Query>
);

export default Pizzas;
