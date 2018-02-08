import { connect } from 'react-redux';
import Search from './search';

import { fetchSearch } from '../../actions/search_actions';
import { fetchArtist, fetchUserArtists } from '../../actions/artists_actions';
import { fetchAlbum, fetchArtistAlbums, fetchUserAlbums, fetchAlbumsByIds } from '../../actions/albums_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: state.entities.searchResults,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: searchTerm => dispatch(fetchSearch(searchTerm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
