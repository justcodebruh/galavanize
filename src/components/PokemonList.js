import  React  from 'react';
import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    const shownListOfPokemon = this.props.listOfPokemonSpecies ?   this.props.listOfPokemonSpecies.map((pokemon, index) => 
    <Pokemon key={index} name={pokemon.name}/>) : <Pokemon name="N/A"/>;
    
    return (
      <ul>
        {shownListOfPokemon}
      </ul>
    );
  }
}

export default PokemonList;
