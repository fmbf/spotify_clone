import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";


export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const fetchUserSongs = (userId) => dispatch => (
  SongApiUtil.fetchUserSongs(userId)
    .then(serverSongs => dispatch(receiveSongs(serverSongs)))
);

export const fetchSongSongs = (artistId) => dispatch => (
  SongApiUtil.fetchSongSongs(artistId)
    .then(serverSongs => dispatch(receiveSongs(serverSongs)))
);

export const fetchSong = id => dispatch => (
  SongApiUtil.fetchSong(id)
    .then(serverSong => dispatch(receiveSong(serverSong)))
);
