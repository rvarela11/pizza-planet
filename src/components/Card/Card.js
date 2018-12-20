// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

// @styles
import './Card.scss';


const Card = (props) => {
    const { item } = props;
    return (
        <Link to="/order" className="pizza-card" aria-label={item.description} tabIndex="0" role="button">
            <div className="pizza-card__size">
                <div className="pizza-card__size-label">
                    {item.name.charAt(0)}
                </div>
                <div className="pizza-card__size-name">
                    {item.name}
                </div>
            </div>
            <div className="pizza-card__description">
                <div className="pizza-card__description-basePrice">
                    {item.basePrice}
                </div>
                <div className="pizza-card__description-maxToppings">
                    {`Max Toppings: ${item.maxToppings}`}
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    item: PropTypes.object.isRequired
};


export default withRouter(Card);
