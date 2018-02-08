import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import EntityIndexContainer from '../entity_index_container'; // playlists, this may break

import ArtistSearchIndex from './artists_search_index';
import AlbumSearchIndex from './albums_search_index';
import PlaylistSearchIndex from './playlists_search_index';



class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;

    this.hideSwitch = this.hideSwitch.bind(this);
    this.playBubble = this.playBubble.bind(this);

    this.artists = this.props.searchResults.artists;
    this.albums = this.props.searchResults.albums;
    this.songs = this.props.searchResults.songs;
    this.playlists = this.props.searchResults.playlists;
    this.users = this.props.searchResults.users;

    this.state = { searchTerm: '' };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    // this.props.fetchSearch('mad');
    // this.props.fetchSearch('');
  }

  componentWillUnmount() {
    this.props.fetchSearch('');
  }


  componentWillReceiveProps(newProps){
    if (newProps.searchResults.artists) {
      this.artists = newProps.searchResults.artists;
      this.albums = newProps.searchResults.albums;
      this.songs = newProps.searchResults.songs;
      this.playlists = newProps.searchResults.playlists;
      this.users = newProps.searchResults.users;
    }

    if (this.props.location.pathname !== newProps.location.pathname &&
      newProps.match.params.artistId){
    }
  }

  /*------------------------Search_Handlers---------------------------*/
  handleSearchSubmit(e) {
    e.preventDefault();
    // // let searchTerm = this.state.searchTerm.split(' ').join('+');
    // debugger
    this.props.fetchSearch(this.state.searchTerm);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }
  /*-------------------------------------------------------------------*/




  /*------------------BUBBLES--------------------*/
  playBubble(playlistId){
    console.log(`now playing entity ${playlistId}`);
  }

  hideSwitch(action, id) {
    let playButton = document.getElementById(`hidden-${id}`);
    let img = document.getElementById(id);

    if (action === 'show') {
      playButton.style.opacity = '1.0';
      playButton.style.color = '#282828'; // button color main
      img.style.borderColor = '#1bc156';
      img.style.opacity = '0.5';
    } else {
      playButton.style.opacity = '0.0';
      playButton.style.color = '#ccc'; // button color transitional
      img.style.borderColor = '#fff';
      img.style.opacity = '1.0';
    }
  }
  /*-------------------------------------------------*/



  render() {
    if(!this.props.searchResults) {
      return null;
    }

    if (this.artists) {
      {/*this.titleArtists = <h3>Artists</h3>;*/}
        this.titleArtists = null;
    } else {
      this.titleArtists = null;
    }

    this.searchResults = this.props.searchResults;

    return (
      <div>
        <div className="main-window main">
          <header id='main-header'>

            {/*----------------------SEARCHBAR---------------------*/}
            <div id='header-search-parent'>
              <button className="button-green" id='search-button-header' type="submit">
                <i className="fas fa-search fa-sm"></i>
              </button>
              <form onSubmit={this.handleSearchSubmit}>
                <input type='text' placeholder=" search"
                  value={this.state.searchTerm} onChange={this.handleChange}
                  className="login-input" id='header-search'/>
              </form>
            </div>
            {/*----------------------------------------------------*/}

            <UserSessionNavContainer/>
          </header>

          {/*-----------------Artist_Index---------------------*/}
            <div className='entity-index-container search-sections'>
              {this.titleArtists}
              <h1>Artists</h1>
              <ul className='entity-index'>
                {
                  <ArtistSearchIndex artists={this.artists} hide={this.hideSwitch} play={this.playBubble}/>
                }
              </ul>
            </div>
            <br/>
          {/*-----------------Album_Index---------------------*/}
          <div className='entity-index-container search-sections'>
            <h1>Albums</h1>
            <ul className='entity-index'>
              {
                <AlbumSearchIndex albums={this.albums} hide={this.hideSwitch} play={this.playBubble}/>
              }
            </ul>
          </div>
          <br/>
          {/*-----------------Playlist_Index---------------------*/}
          <div className='entity-index-container search-sections'>
            <h1>Playlists</h1>
            <ul className='entity-index'>
              {
                <PlaylistSearchIndex playlists={this.playlists} hide={this.hideSwitch} play={this.playBubble}/>
              }
            </ul>
          </div>
          <br/>
          {/*-------------------------------------------------*/}


          {/*<EntityIndexContainer />*/}
        </div>

        <br/>
      </div>
    );


  }
}

export default SearchIndex;
