import React from 'react';
import PokeCard from './PokeCard';
import PropTypes from 'prop-types';

const PokeList = (props) => {

    const { pokemons } = props;

    return (
        <ul className="list__app">
            {pokemons.map(pokemon => {
                return (
                    <li className="list__item" key={pokemon.id}>
                        <PokeCard
                            name={pokemon.name}
                            url={pokemon.url}
                            id={pokemon.id}
                        />
                    </li>
                );
            })}
        </ul>
    )
}

PokeList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokeList;