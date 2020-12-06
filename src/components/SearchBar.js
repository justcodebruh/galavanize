import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event.target.value);
  }

  handleSubmit(event) {
    let link =
      "https://pokeapi.co/api/v2/pokemon-habitat/" +
      this.props.habitatSearchText.toLowerCase();
    fetch(link)
      .then((res) => res.json())
      .then(
        (result) => {
          this.props.onHandleSubmit(result.pokemon_species);
        },
        (error) => {
          this.handleError(error);
        }
      );
    event.preventDefault();
  }

  handleError(error) {
    this.props.onHandleError(error);
  }

  handleLoading() {
    this.props.onHandleLoading();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Grassland, forest, cave..."
          value={this.props.habitatSearchText}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
