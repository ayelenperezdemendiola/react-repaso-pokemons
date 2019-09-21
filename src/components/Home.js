import React from 'react';
import PokeList from './PokeList';
import PropTypes from 'prop-types';


const Home = (props) => {
    const { pokemons } = props;
    return (
        <PokeList
            pokemons={pokemons}
        />
    )
}

Home.propTypes = {
    pokemons : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home;