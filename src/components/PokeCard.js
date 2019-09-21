import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokeCard = (props) => {
    const { name, url, id } = props;
    return (
        <Link to={`/poke-info/${id}`}>
            <div className="item__container">
                <div className="img__container">
                    <img alt={name} src={url} className="img" />
                </div>
                <h2 className="item__name">{name}</h2>
            </div>
        </Link>
    )
}

PokeCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default PokeCard;