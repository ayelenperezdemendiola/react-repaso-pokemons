const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json';

const FecthPokemons = () => {return (fetch(ENDPOINT).then(resp => resp.json()))};

export {FecthPokemons};