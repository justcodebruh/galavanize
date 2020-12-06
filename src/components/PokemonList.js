import React from "react";
import Pokemon from "./Pokemon";

class PokemonList extends React.Component {
  render() {
    const shownListOfPokemon =
      this.props.listOfPokemonSpecies.length > 0 ? (
        this.props.listOfPokemonSpecies.map((pokemon, index) => (
          <Pokemon key={index} name={pokemon.name} />
        ))
      ) : (
        <h1>No Pokemon found...</h1>
      );

    return <ul>{shownListOfPokemon}</ul>;
  }
}

export default PokemonList;
