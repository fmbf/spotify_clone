
export const fetchUserAlbums = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/albums`,
  })
);

export const fetchArtistAlbums = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${artistId}/albums`,
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);
