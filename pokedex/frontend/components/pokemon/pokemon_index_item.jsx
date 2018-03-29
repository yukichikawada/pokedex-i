import React, { Component } from 'react';

class PokemonIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const poke = this.props;
    return (
      <li>
        <img src={poke.image_url} />
        {poke.name}
      </li>
    );
  }
}

export default PokemonIndexItem;
