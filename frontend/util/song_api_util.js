export const fetchUserSongs = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/songs`,
  })
);

export const fetchArtistSongs = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${artistId}/songs`,
  })
);

export const fetchAlbumSongs = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}/songs`,
  })
);

export const fetchPlaylistSongs = (playlistId) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${playlistId}/songs`,
  })
);

export const fetchSong = id => (
  $.ajax({
    method: 'GET',
    url: `api/songs/${id}`
  })
);

export const addSongToPlaylist = (songId, playlistId) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistId}/songs/${songId}`,
  })
);

export const removeSongFromPlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${id}/songs`,
  })
);
