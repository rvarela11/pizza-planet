// @vendors
import React, { Component, Fragment } from 'react';
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
        remainingToppings: null
    };

    componentDidMount() {
        const { data: { toppings } } = this.props;
        const checkedDefaultSelectedValues = [];

        // Check the initial defaultSelected from the toppings array
        toppings.map(value => value.defaultSelected ? checkedDefaultSelectedValues.push(value) : null);
        this.setState({
            checked: checkedDefaultSelectedValues
        }, this.handleRemainingToppings);
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
        }, this.handleRemainingToppings);
    };

    handleRemainingToppings = () => {
        const { data: { maxToppings, toppings } } = this.props;
        const { checked } = this.state;
        const maxT = maxToppings || (toppings.length - 1);
        this.setState({ remainingToppings: maxT - checked.length });
    }

    render() {
        const {
            classes, data:
            {
                basePrice,
                name,
                toppings
            }
        } = this.props;
        const { checked, remainingToppings } = this.state;

        return (
            <Fragment>
                <div className="order-card__details">
                    { /*eslint-disable */ }
                    <h3>Size: { name }</h3>
                    <h3>Remaining toppings: { remainingToppings } </h3>
                    <h3>$ { basePrice } </h3>
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
            </Fragment>
        );
    }
}

OrderCard.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderCard);
