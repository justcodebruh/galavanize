import  React  from "react";
import  SearchBar  from './SearchBar';
import  PokemonList  from './PokemonList';


class PokemonDisplayTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habitatSearchText: '',
      listOfPokemonSpecies: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(habitatSearchText) {
    this.setState({habitatSearchText: habitatSearchText});
  }

  handleSubmit(listOfPokemonSpecies) {
    this.setState({listOfPokemonSpecies: listOfPokemonSpecies});
  }



  render() {
    return (
      <div>
        <SearchBar 
          habitatSearchText={this.state.habitatSearchText}
          onHandleSubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
        />
        <PokemonList 
          listOfPokemonSpecies={this.state.listOfPokemonSpecies}
        />
      </div>
    );
  }
}

export default PokemonDisplayTable;
