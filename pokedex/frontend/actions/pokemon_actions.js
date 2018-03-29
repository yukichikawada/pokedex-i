export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';
export const REQUEST_ONE_POKEMON = 'REQUEST_ONE_POKEMON';

import { fetchAllPokemon, fetchOnePokemon } from '../util/api_utils';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receiveOnePokemon = pokemon => ({
  type: RECEIVE_ONE_POKEMON,
  pokemon
});

export const requestOnePokemon = () => (dispatch) => (
  fetchOnePokemon()
    .then(pokemon => dispatch(receiveOnePokemon(pokemon)))
);
