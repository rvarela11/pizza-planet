// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// @queries
import { getCartItems } from './queries';

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

const CartCard = (props) => {
    const { classes } = props;
    return (
        <Query query={getCartItems}>
            {({ data: { cartItems }, loading }) => {
                if (loading) return null;
                return (
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
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                );
            }}
        </Query>
    );
};

CartCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CartCard);
