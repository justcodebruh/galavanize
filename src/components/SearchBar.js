import  React  from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.props.onHandleChange(event.target.value);
  }

  handleSubmit(event) {
    //On the submission we want to take the value submitted
    //and execute a fetch request
    let link = "https://pokeapi.co/api/v2/pokemon-habitat/" + this.props.habitatSearchText;
    fetch(link)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.onHandleSubmit(result.pokemon_species);
        },
        (error) => {
          this.setState({
            error
          });
        }
        
        );
    event.preventDefault();
  }

  render() {
    return (
			<form onSubmit={this.handleSubmit}>
				<input 
          type="text" 
          placeholder="Search..."
          value={this.props.habitatSearchText} 
          onChange={this.handleChange} 
          />
        <input type="submit" value="Search" />
			</form>
    );
  }
}

export default SearchBar;
