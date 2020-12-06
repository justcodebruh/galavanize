import React from "react";

class Pokemon extends React.Component {
  render() {
    const externalLink =
      "https://bulbapedia.bulbagarden.net/wiki/" + this.props.name;
    return (
      <div>
        <h1>{this.props.name}</h1>
        <a href={externalLink}>Learn more about this Pokemon!</a>
      </div>
    );
  }
}

export default Pokemon;
