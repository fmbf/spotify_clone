
export const fetchPlaylists = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/playlists`,
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const createPlaylist = playlist => (
  $.ajax({
    url: 'api/playlists',
    method: 'POST',
    data: { playlist }
  })
);

export const updatePlaylist = playlist => (
  $.ajax({
    url: `api/playlists/${playlist.id}`,
    method: 'PATCH',
    data: { playlist }
  })
);

export const deletePlaylist = id => (
  $.ajax({
    url: `api/playlists/${id}`,
    method: 'DELETE'
  })
);
