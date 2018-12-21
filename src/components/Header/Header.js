// @vendors
import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { ShoppingCart } from '@material-ui/icons/';

// @styles
import './Header.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className="link header__logo" />
        <Link to="/cart" className="link">
            <IconButton>
                <Badge badgeContent={4} color="secondary" invisible>
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Link>
    </div>
);

export default Header;
