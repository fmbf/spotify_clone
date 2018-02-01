import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receiveAllPlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const fetchPlaylists = () => dispatch => (
  PlaylistApiUtil.fetchPlaylists()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
);

export const fetchPlaylist = id => dispatch => (
  PlaylistApiUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)))
);

export const createPlaylist = playlist => dispatch => (
  PlaylistApiUtil.createPlaylist(playlist)
    .then(serverPlaylist => dispatch(receivePlaylist(serverPlaylist)))
);

export const updatePlaylist = playlist => dispatch => (
  PlaylistApiUtil.updatePlaylist(playlist)
    .then(serverPlaylist => dispatch(receivePlaylist(serverPlaylist)))
);

export const deletePlaylist = playlistId => dispatch => (
  PlaylistApiUtil.deletePlaylist(playlistId)
    .then(playlist => dispatch(removePlaylist(playlistId)))
);
