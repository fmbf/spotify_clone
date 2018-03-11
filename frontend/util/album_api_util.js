
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

export const fetchAlbumsByIds = (albumIds) => (
  $.ajax({
    method: 'GET',
    url: `api/albums`,
  })
);
//
// export const fetchAlbumsByIds = (albumIds) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/albums`,
//     data: {
//       album_ids: albumIds
//     }
//   })
// );
