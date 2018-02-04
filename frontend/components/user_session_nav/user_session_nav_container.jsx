import { connect } from 'react-redux';
import userSessionNav from './user_session_nav';

import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(userSessionNav);
