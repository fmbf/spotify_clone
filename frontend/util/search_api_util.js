export const fetchSearchResults = searchTerm => (
  $.ajax({
    method: 'GET',
    url: `/api/search/${searchTerm}`
  })
);
