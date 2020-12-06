import React from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

class PokemonDisplayTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habitatSearchText: "",
      listOfPokemonSpecies: [],
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleChange(habitatSearchText) {
    this.setState({ habitatSearchText: habitatSearchText });
  }

  handleSubmit(listOfPokemonSpecies) {
    this.setState({ listOfPokemonSpecies: listOfPokemonSpecies });
    this.setState({ isLoading: false });
  }

  handleError(error) {
    this.setState({ error: error });
    this.setState({ listOfPokemonSpecies: [] });
  }

  render() {
    return (
      <div>
        <SearchBar
          habitatSearchText={this.state.habitatSearchText}
          onHandleSubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
          onHandleError={this.handleError}
        />
        <PokemonList
          listOfPokemonSpecies={this.state.listOfPokemonSpecies}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default PokemonDisplayTable;
