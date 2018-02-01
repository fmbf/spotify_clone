export const fetchUsers = () => (
  $.ajax({
    url: `/api/user`,
    method: 'GET',
  })
);

export const fetchUser = (id) => (
  $.ajax({
    url: `/api/user/${id}`,
    method: 'GET',
  })
);
