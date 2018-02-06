import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';


export const receiveAllPlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const receiveErrors = errors => ({
  type: RECEIVE_PLAYLIST_ERRORS,
  errors
});

export const fetchPlaylists = (userId) => dispatch => (
  PlaylistApiUtil.fetchPlaylists(userId)
    .then(serverPlaylists => dispatch(receiveAllPlaylists(serverPlaylists)))
);

export const fetchPlaylist = id => dispatch => (
  PlaylistApiUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)))
);

export const createPlaylist = playlist => dispatch => (
  PlaylistApiUtil.createPlaylist(playlist)
    .then(serverPlaylist => dispatch(receivePlaylist(serverPlaylist)),
          err =>  dispatch(receiveErrors(err.responseJSON)))
);

export const updatePlaylist = playlist => dispatch => (
  PlaylistApiUtil.updatePlaylist(playlist)
    .then(serverPlaylist => dispatch(receivePlaylist(serverPlaylist)),
          err =>  dispatch(receiveErrors(err.responseJSON)))
);

export const deletePlaylist = playlistId => dispatch => (
  PlaylistApiUtil.deletePlaylist(playlistId)
    .then(playlist => dispatch(removePlaylist(playlistId)))
);
