import { values } from 'lodash';

export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
  const foundItem = pokemonDetail.items.find(item => item.id === itemId);
  return foundItem || {};
};

export const selectAllPokemon = ({ pokemon }) => values(pokemon.entities);



export const stateSongsArr = (songs, filter) => {
  // {29: {…}, 30: {…}, 31: {…}, 32: {…}, 33: {…}, 34: {…}, 35: {…}

  let s = Object.values(songs).map(song => (
      Object.values(song)
  ));
  // debugger

};


export const selectSearchedArtists = () => {

};



export const selectArtistSongs = (songsState) => {
  // {29: {…}, 30: {…}, 31: {…}, 32: {…}, 33: {…}, 34: {…}, 35: {…}

  let artistSongs = Object.values(songsState).map(song => (
      Object.values(song)
  ));
  // debugger

};
