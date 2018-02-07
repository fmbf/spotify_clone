
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


export const fetchArtistsByIds = (artistIds) => (
  $.ajax({
    method: 'GET',
    url: `api/artists`,
    data: {
      artist_ids: artistIds
    }
  })
);
