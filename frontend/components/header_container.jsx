import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';

import Header from './header';

import { receiveSearchResults, fetchSearchResults } from '../actions/search_actions';


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

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
