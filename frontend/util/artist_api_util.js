
export const fetchArtists = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/artists`,
  })
);

export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);
