// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// @styles
import './CartCard.scss';

// Overriding material-ui classes
const styles = () => ({
    root: {
        width: '100%',
        maxWidth: 360
    },
    listItem: {
        borderBottom: '1px solid #f4f4f4'
    }
});

class CartCard extends Component {
    state = {
        totalPrice: 0
    };

    componentDidMount() {
        this.updateTotalPrice();
    }

    componentDidUpdate(prevProps) {
        const prevPropsCartItems = prevProps.cartItems;
        const { cartItems } = this.props;

        if (prevPropsCartItems !== cartItems) {
            this.updateTotalPrice();
        }
    }

    updateTotalPrice = () => {
        const { cartItems } = this.props;
        const totalPriceOfPizzas = [];
        // Push total price of toppings to array 'totalPriceOfToppings'
        // Next find the sum of totalPriceOfToppings and setState to totalPrice
        cartItems.map(value => totalPriceOfPizzas.push(value.totalPrice));
        const sumOfTotalPriceOfPizzas = totalPriceOfPizzas.reduce((a, b) => a + b, 0);
        this.setState({ totalPrice: sumOfTotalPriceOfPizzas });
    }

    getIndexToRemoveItem = index => () => {
        const { removeItem } = this.props;
        removeItem(index);
    }

    render() {
        const { classes, cartItems } = this.props;
        const { totalPrice } = this.state;
        return (
            <div className="cart-card">
                { /*eslint-disable */ }
                <h3 className="cart-card__totalPrice">Total: ${totalPrice.toFixed(2)}</h3>
                { /* eslint-enable */}
                <List className={classes.root}>
                    {cartItems.map((value, index) => (
                        <ListItem key={index} className={classes.listItem}>
                            <ListItemText
                                primary={`$${value.totalPrice}`}
                            />
                            <ListItemText
                                primary={value.name}
                                secondary={`Toppings: ${value.totalToppings}`}
                            />
                            <ListItemSecondaryAction>
                                <IconButton
                                    aria-label="Delete"
                                    onClick={this.getIndexToRemoveItem(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

CartCard.propTypes = {
    cartItems: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired
};

export default withStyles(styles)(CartCard);
