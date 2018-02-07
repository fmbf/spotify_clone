import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const LOADING = "LOADING";

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const loading = () => ({
  type: LOADING,
});


export const fetchUserArtists = (userId) => dispatch => (
  ArtistApiUtil.fetchUserArtists(userId)
    .then(serverArtists => dispatch(receiveArtists(serverArtists)))
);

export const fetchArtistsByIds = (IDsArr) => dispatch => (
  ArtistApiUtil.fetchArtistsByIds(IDsArr)
    .then(serverArtists => dispatch(receiveArtists(serverArtists)))
);

export const fetchArtist = id => dispatch => (
  ArtistApiUtil.fetchArtist(id)
    .then(serverArtist => dispatch(receiveArtist(serverArtist)))
);
