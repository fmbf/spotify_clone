import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';


export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});


export const fetchSearchResults = (queryString) => dispatch => (
  SearchApiUtil.fetchSearchResults(queryString)
    .then(serverResults => dispatch(receiveSearchResults(serverResults)))
);
