// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// @queries
import { getPizzaSizeByNameFromState, getPizzaSizeByName } from './queries';

// @components
import OrderCard from '../OrderCard/OrderCard';

// @styles
import './Order.scss';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: 'white'
    }
});

const Order = (props) => {
    const { classes } = props;
    return (
        <Query query={getPizzaSizeByNameFromState}>
            {({ data: { selectedPizzaSizeFromMenu }, loading }) => {
                if (loading) return null;
                return (
                    <Query query={getPizzaSizeByName} variables={{ selectedPizzaSizeFromMenu }} skip={!selectedPizzaSizeFromMenu}>
                        {({ data: { pizzaSizeByName }, loading }) => {
                            if (loading) return null;
                            return (
                                <div className="order__selection">
                                    <div className="order__buttons">
                                        <Button variant="contained" color="primary" className={classes.button}> ADD </Button>
                                        <Button variant="contained" color="secondary" className={classes.button}>
                                            <Link to="/" className="link"> MENU </Link>
                                        </Button>
                                        <Button variant="contained" color="secondary" className={classes.button}> CART </Button>

                                    </div>
                                    <OrderCard data={pizzaSizeByName} />
                                </div>
                            );
                        }}
                    </Query>
                );
            }}
        </Query>
    );
};

Order.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Order);
