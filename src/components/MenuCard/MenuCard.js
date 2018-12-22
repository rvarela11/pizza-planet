// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// @mutations
import { updatePizzaSizeByName } from './mutations';

// @styles
import './MenuCard.scss';


const MenuCard = (props) => {
    const { item } = props;
    return (
        <Mutation mutation={updatePizzaSizeByName}>
            {updatePizzaSizeByName => (
                <Link
                    to="/order"
                    className="menu-card link"
                    aria-label={item.description}
                    onClick={() => updatePizzaSizeByName({ variables: { selectedPizzaSizeFromMenu: item.name } })}
                    tabIndex="0"
                    role="button"
                >
                    <div className="menu-card__size">
                        <div className="menu-card__size-label">
                            {item.name.charAt(0)}
                        </div>
                        <div className="menu-card__size-name">
                            {item.name}
                        </div>
                    </div>
                    <div className="menu-card__description">
                        <div className="menu-card__description-basePrice">
                            {item.basePrice}
                        </div>
                        <div className="menu-card__description-maxToppings">
                            {`Max Toppings: ${item.maxToppings || 7}`}
                        </div>
                    </div>
                </Link>
            )}
        </Mutation>
    );
};

MenuCard.propTypes = {
    item: PropTypes.object.isRequired
};


export default withRouter(MenuCard);
