import React, { Component } from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allPokes = this.props.pokemon;
    return (
      <ul>
        {allPokes.map(poke =>  (
          <PokemonIndexItem
            key={poke.id}
            props={poke} />
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
