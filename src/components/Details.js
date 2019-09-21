import React from 'react';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const { pokemons, routerProps } = props;
    const { id } = routerProps.match.params;
    const myPokeId = parseInt(id);
    const myPoke = pokemons.find(poke => poke.id === myPokeId);
    console.log(myPoke);
    return (
        <React.Fragment>
            {myPoke ?
             <div className="myPoke__container">
                <img alt={myPoke.name} src={myPoke.url} className="myPoke--img" />
                <h2 className="myPoke__name">{myPoke.name}</h2>
                <ul className="myPoke__types">
                    {myPoke.types.map((type, index) => {
                        return (
                            <li className="type" key={index}>{type}</li>
                        );
                    })
                    }
                </ul>
                <p className="myPoke__evolution">{`Evolución: ${myPoke.evolution}`|| 'No evoluciono'}</p>
            </div >
            :
            <p className="ad--notFound">Lo sentimos, no encontramos a tu pokemon</p>
            }
           <Link to="/"><p>Buscar más pokemones</p></Link>
        </React.Fragment>
    )
}

export default Details;