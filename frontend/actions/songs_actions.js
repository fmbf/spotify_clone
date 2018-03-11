import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONG_INTERRUPT = "RECEIVE_SONG_INTERRUPT";
export const RECEIVE_PLAYLIST_SONG_ADD = 'RECEIVE_PLAYLIST_SONG_ADD';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

import { fetchPlaylist } from './playlists_actions';


export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receiveSongInterrupt = song => ({
  type: RECEIVE_SONG_INTERRUPT,
  song
});


export const fetchUserSongs = (userId) => dispatch => (
  SongApiUtil.fetchUserSongs(userId)
    .then(serverSongs => dispatch(receiveSongs(serverSongs)))
);

export const fetchArtistSongs = (artistId) => dispatch => (
  SongApiUtil.fetchArtistSongs(artistId)
    .then(serverSongs => dispatch(receiveSongs(serverSongs)))
);

export const fetchPlaylistSongs = (artistId) => dispatch => (
  SongApiUtil.fetchPlaylistSongs(artistId)
    .then(serverSongs => dispatch(receiveSongs(serverSongs)))
);

export const fetchAlbumSongs = (albumId) => dispatch => (
  SongApiUtil.fetchAlbumSongs(albumId)
    .then(serverSongs => dispatch(receiveSongs(serverSongs)))
);

export const fetchSong = id => dispatch => (
  SongApiUtil.fetchSong(id)
    .then(serverSong => dispatch(receiveSong(serverSong)))
);

export const fetchAllSongs = () => dispatch => (
  SongApiUtil.fetchAllSongs()
    .then(serverSongs => dispatch(receiveSongs(serverSongs)))
);

export const fetchSongInterrupt = id => dispatch => (
  SongApiUtil.fetchSong(id)
    .then(serverSong => dispatch(receiveSongInterrupt(serverSong)))
);

export const addSongToPlaylist = (songId, playlistId) => dispatch => (
  SongApiUtil.addSongToPlaylist(songId, playlistId)
);

export const removeSongFromPlaylist = (songId, playlistId) => dispatch => (
  SongApiUtil.removeSongFromPlaylist(songId, playlistId)
    .then(() => dispatch(fetchPlaylist(playlistId)))
);
