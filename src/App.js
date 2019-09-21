import React from 'react';
import { FecthPokemons } from './services/fetchPokemos';
import Home from './components/Home';
import Details from './components/Details';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = () => {
    FecthPokemons()
      .then(pokeData => {
        return (
          this.setState({
            pokemons: pokeData
          })
        );
      });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="app">
        <h1 className="app__title">Pokemons</h1>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Home
                pokemons={pokemons}
              />
            );
          }}
          />
          <Route path="/poke-info/:id" render={(routerProps) => {
            return (
              <Details
                pokemons={pokemons}
                routerProps={routerProps}
              />
            );
          }}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
