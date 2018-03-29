import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const poke = this.props.props;
    return (
      <li>
        <Link to={"/pokemon/" +poke.id}>
          <img src={poke.image_url} />
          {poke.name}
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
