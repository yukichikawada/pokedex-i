import React, { Component } from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';

class PokemonIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allPokes = this.props.pokemon;
    // console.log(allPokes);
    return (
      <ul>
        {allPokes.map(poke =>  (
          <li key={poke.id}>
            <img src={poke.image_url} />
            {poke.name}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    console.log(this.props);
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
