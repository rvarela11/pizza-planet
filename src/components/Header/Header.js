// @vendors
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { ShoppingCart } from '@material-ui/icons/';


// @styles
import './Header.scss';

const Header = () => (
    <div className="header">
        <figure className="header__logo" />
        <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary" invisible>
                <ShoppingCart />
            </Badge>
        </IconButton>
    </div>
);

export default Header;
