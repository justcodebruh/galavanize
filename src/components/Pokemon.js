import  React  from "react";

class Pokemon extends React.Component {
    render() {
        // const externalLink = "https://bulbapedia.bulbagarden.net/wiki/" + this.props.name;
    return (
      <div>
          <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Pokemon;
