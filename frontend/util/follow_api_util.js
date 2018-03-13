
// export const fetchUserFollows

//
// export const followEntity = (follow) => (
//   $.ajax({
//     url: '/api/session',
//     method: 'POST',
//     data: { follow }
//   })
// );



export const createFollow = follow => (
  $.ajax({
    url: 'api/follows',
    method: 'POST',
    data: { follow }
  })
);




// export const updatePlaylist = follow => (
//   $.ajax({
//     url: `api/follows/${follow.id}`,
//     method: 'PATCH',
//     data: { follow }
//   })
// );
