import { connect } from 'react-redux';
import App from './App';

import { logout } from '../actions/session_actions';



const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
