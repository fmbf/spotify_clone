import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import UserSessionNavContainer from './user_session_nav/user_session_nav_container';

import EntityIndexContainer from './entity_index_container'; // playlists, this may break
import ArtistSearchIndex from './search/artists_search_index';
import AlbumSearchIndex from './search/albums_search_index';
import PlaylistSearchIndex from './search/playlists_search_index';


class Header extends React.Component {
  constructor(props){
    super(props);

      this.currentUser = this.props.currentUser;

      this.artists = this.props.searchResults.artists;
      this.albums = this.props.searchResults.albums;
      this.songs = this.props.searchResults.songs;
      this.playlists = this.props.searchResults.playlists;
      this.users = this.props.searchResults.users;

      this.state = this.props.searchTerm || { searchTerm: '' };
      this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (newProps.searchResults.artists) {
      this.artists = newProps.searchResults.artists;
      this.albums = newProps.searchResults.albums;
      this.songs = newProps.searchResults.songs;
      this.playlists = newProps.searchResults.playlists;
      this.users = newProps.searchResults.users;
      // this.props.history.push('/search');
    }

    if (newProps.location && newProps.location.pathname !== this.props.location.pathname) {
      this.setState({ searchTerm:'' });
    }

  }

  /*------------------------Search_Handlers---------------------------*/
  handleSearchSubmit(e) {
    e.preventDefault();
    // // let searchTerm = this.state.searchTerm.split(' ').join('+');
    // debugger

    this.props.fetchSearch(this.state.searchTerm)
      .then(() =>  this.props.history.push('/search'));
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }
  /*-------------------------------------------------------------------*/


  render() {
    if(!this.props.searchResults) {
      return null;
    }

    this.searchResults = this.props.searchResults;

    return (
      <header id='main-header'>

        {/*----------------------SEARCHBAR---------------------*/}
        <div id='header-search-parent'>
          <button className="button-green" id='search-button-header' type="submit">
            <i className="fas fa-search fa-sm"></i>
          </button>
          <form onSubmit={this.handleSearchSubmit}>
            <input type='text' placeholder=" search"
              value={this.state.searchTerm} onChange={this.handleChange}
              autoComplete="off"
              className="login-input" id='header-search'/>
          </form>
        </div>
        {/*----------------------------------------------------*/}

        <UserSessionNavContainer/>
      </header>
    );
  }
}


export default Header;
