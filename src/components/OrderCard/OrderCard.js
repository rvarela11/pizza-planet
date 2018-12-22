// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

// @mutations
import { addItemToCart } from './mutations';

// @styles
import './OrderCard.scss';

// Overriding material-ui classes
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        margin: 'auto'
    },
    button: {
        width: '5rem',
        margin: theme.spacing.unit,
        color: 'white'
    }
});

class OrderCard extends Component {
    state = {
        checked: [],
        remainingToppings: null,
        totalPrice: 0,
        totalToppings: 0
    };

    componentDidMount() {
        const { data: { toppings } } = this.props;
        const checkedDefaultSelectedValues = [];
        // Map toppings for defaultSelected and setState checked to the ones that are true
        toppings.map(value => value.defaultSelected ? checkedDefaultSelectedValues.push(value) : null);
        this.setState({
            checked: checkedDefaultSelectedValues
        }, this.updateRemainingToppings);
    }

    handleToggle = (value) => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        }, this.updateRemainingToppings);
    };

    updateRemainingToppings = () => {
        const { data: { maxToppings, toppings } } = this.props;
        const { checked } = this.state;
        // Updating remainingToppings
        const maxT = maxToppings || toppings.length;
        this.setState({
            remainingToppings: maxT - checked.length,
            totalToppings: checked.length
        }, this.updateTotalPrice);
    }

    updateTotalPrice = () => {
        const { data: { basePrice } } = this.props;
        const { checked } = this.state;
        const totalPriceOfToppings = [];
        // Push total price of toppings to array 'totalPriceOfToppings'
        // Next find the sum of totalPriceOfToppings and setState to totalPrice
        checked.map(value => totalPriceOfToppings.push(value.topping.price));
        const sumOfTotalPriceOfToppings = totalPriceOfToppings.reduce((a, b) => a + b, 0);
        this.setState({ totalPrice: basePrice + sumOfTotalPriceOfToppings });
    }

    render() {
        const { classes, data: { name, toppings } } = this.props;
        const {
            checked,
            remainingToppings,
            totalPrice,
            totalToppings
        } = this.state;
        return (
            <div className="order-card">
                <div className="order-card__buttons">
                    <Mutation mutation={addItemToCart}>
                        {addItemToCart => (
                            <Button
                                className={classes.button}
                                color="primary"
                                onClick={() => addItemToCart({ variables: { name, totalPrice, totalToppings } })}
                                variant="contained"
                            >
                            ADD
                            </Button>
                        )}
                    </Mutation>
                    <Button className={classes.button} color="secondary" variant="contained">
                        <Link to="/" className="link"> MENU </Link>
                    </Button>
                    <Button className={classes.button} color="secondary" variant="contained">
                        <Link to="/cart" className="link"> CART </Link>
                    </Button>
                </div>
                <div className="order-card__details">
                    { /*eslint-disable */ }
                    <h3 className="order-card__details-label">Size: <span>{ name }</span></h3>
                    <h3 className="order-card__details-label">Remaining toppings: <span>{ remainingToppings }</span></h3>
                    <h3 className="order-card__details-label">Total: <span>${ totalPrice.toFixed(2) }</span></h3>
                    { /* eslint-enable */}
                </div>
                <List className={classes.root}>
                    {toppings.map((value, index) => (
                        <ListItem
                            button
                            dense
                            disabled={remainingToppings === 0 && checked.indexOf(value) === -1}
                            key={index}
                            onClick={() => this.handleToggle(value)}
                            role={undefined}
                        >
                            <Checkbox
                                checked={checked.indexOf(value) !== -1}
                                disableRipple
                                tabIndex={-1}
                            />
                            <ListItemText primary={value.topping.name} />
                            <ListItemSecondaryAction>
                                <ListItemText primary={`$ ${value.topping.price}`} />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

OrderCard.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderCard);
