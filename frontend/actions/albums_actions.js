import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";


export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchUserAlbums = (userId) => dispatch => (
  AlbumApiUtil.fetchArtists(userId)
    .then(serverArtists => dispatch(receiveAlbums(serverArtists)))
);

export const fetchArtistAlbums = (artistId) => dispatch => (
  AlbumApiUtil.fetchArtists(artistId)
    .then(serverArtists => dispatch(receiveAlbums(serverArtists)))
);

export const fetchAlbum = id => dispatch => (
  AlbumApiUtil.fetchAlbum(id)
    .then(serverAlbum => dispatch(receiveAlbum(serverAlbum)))
);
