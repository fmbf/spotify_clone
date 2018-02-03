import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { createPlaylist, updatePlaylist, deletePlaylist } from '../../actions/playlists_actions';
import playlistModal from './playlist_modal';


const mapStateToProps = (state, ownProps) => {
  let playlist = { title: ``, image: ``, description: ``};
  let formType = ownProps.formType;
  let author;

  if (ownProps.match.path === "/posts/:playlistId") {
    // Find the author of this playlistId
    author = state.entities.playlists[ownProps.match.params.playlistId].author;

    // only allow edit if you are author
    if (state.session.currentUser === author) {
      playlist = state.entities.playlists[ownProps.match.params.playlistId];
      formType = "edit";
    }
  }


  return {
    clickedOpen: ownProps.clickedNewPlaylist,
    playlist,
    formType,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  let formType = ownProps.formType;
  const processForm = formType === 'edit' ? updatePlaylist : createPlaylist;

  return {
    processForm: formPlaylist => dispatch(processForm(formPlaylist)),
    formType
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(playlistModal));
