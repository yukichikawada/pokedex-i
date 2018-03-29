import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      {/* primary route will go here */}
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

// const Root = ({ store }) => (
//   <Provider store={store}>
//     <PokemonIndexContainer />
//   </Provider>
// );

export default Root;
