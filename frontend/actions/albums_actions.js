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
  AlbumApiUtil.fetchUserAlbums(userId)
    .then(serverAlbums => dispatch(receiveAlbums(serverAlbums)))
);

export const fetchArtistAlbums = (artistId) => dispatch => (
  AlbumApiUtil.fetchArtistAlbums(artistId)
    .then(serverAlbums => dispatch(receiveAlbums(serverAlbums)))
);

export const fetchAlbum = id => dispatch => (
  AlbumApiUtil.fetchAlbum(id)
    .then(serverAlbum => dispatch(receiveAlbum(serverAlbum)))
);
