// @vendors
import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { ShoppingCart } from '@material-ui/icons/';

// @queries
import { getTotalNumberOfItems } from './queries';

// @styles
import './Header.scss';

const Header = () => (
    <Query query={getTotalNumberOfItems}>
        {({ data: { totalNumberOfItems }, loading }) => {
            if (loading) return null;
            return (
                <div className="header">
                    <Link to="/" className="link header__logo" />
                    <Link to="/cart" className="link">
                        <IconButton>
                            <Badge
                                badgeContent={totalNumberOfItems}
                                color="secondary"
                                invisible={totalNumberOfItems.length === 0 || totalNumberOfItems === 0}
                            >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>
            );
        }}
    </Query>
);

export default Header;
