import { RECEIVE_ONE_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_ONE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
