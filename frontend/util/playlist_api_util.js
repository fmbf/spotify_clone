
export const fetchPlaylists = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/playlists/${userId}`,
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const createPlaylist = post => (
  $.ajax({
    url: 'api/playlists',
    method: 'POST',
    data: { post }
  })
);

export const updatePlaylist = post => (
  $.ajax({
    url: `api/playlists/${post.id}`,
    method: 'PATCH',
    data: { post }
  })
);

export const deletePlaylist = id => (
  $.ajax({
    url: `api/playlists/${id}`,
    method: 'DELETE'
  })
);
