export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';

import { fetchItems } from '../util/api_utils';

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const requestItems = () => (dispatch) => (
  fetchItems()
    .then(items => dispatch(receiveItems(items)))
);
