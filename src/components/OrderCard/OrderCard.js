// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

// @styles
import './OrderCard.scss';

// Overriding material-ui classes
const styles = () => ({
    root: {
        width: '100%',
        maxWidth: 360
    }
});

class OrderCard extends Component {
    state = {
        checked: [],
        remainingToppings: null,
        totalPrice: 0
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
        const maxT = maxToppings || (toppings.length - 1);
        this.setState({ remainingToppings: maxT - checked.length }, this.updateTotalPrice);
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
        const { checked, remainingToppings, totalPrice } = this.state;

        return (
            <div className="order-card__details">
                <div className="order-card__details">
                    { /*eslint-disable */ }
                    <h3>Size: { name }</h3>
                    <h3>Remaining toppings: { remainingToppings } </h3>
                    <h3>Total: $ { totalPrice.toFixed(2) } </h3>
                    { /* eslint-enable */}
                </div>
                <List className={classes.root}>
                    {toppings.map((value, index) => (
                        <ListItem
                            key={index}
                            role={undefined}
                            dense
                            button
                            onClick={() => this.handleToggle(value)}
                            disabled={remainingToppings === 0 && checked.indexOf(value) === -1}
                        >
                            <Checkbox
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
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
