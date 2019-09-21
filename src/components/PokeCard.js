import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokeCard = (props) => {
    const { name, url, id } = props;
    return (
        <div className="item__container">
            <Link className="link" to={`/poke-info/${id}`}>
                <div className="img__container">
                    <img alt={name} src={url} className="img" />
                </div>
                <h2 className="item__name">{name}</h2>
            </Link>
        </div>
    );
}

PokeCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default PokeCard;