import { connect } from 'react-redux';
import SearchIndex from './search_index';

import { receiveSearchResults, fetchSearchResults } from '../../actions/search_actions';
import { fetchArtist, fetchUserArtists } from '../../actions/artists_actions';
import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums, fetchAlbumsByIds } from '../../actions/albums_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    searchResults: state.entities.searchResults,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: (searchTerm) => dispatch(fetchSearchResults(searchTerm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
