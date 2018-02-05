import { connect } from 'react-redux';
import albumProfile from './album_profile';

import { fetchAlbum } from '../../actions/albums_actions';



const mapStateToProps = (state, ownProps) => ({
  songs: [1, 2, 3, 4, 5, 6, 7],
  album: state.entities.albums[ownProps.match.params.albumId],
  currentUser: state.session.currentUser
});




const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(albumProfile);
