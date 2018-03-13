import React from 'react';
import {Route} from 'react-router-dom';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import SongsIndexContainer from '../songs/songs_index_container';
import albumIndexContainer from '../albums/album_index_container';

import artistsIndexContainer from '../artists/artists_index_container';
import ArtistsIndex from '../artists/artists_index_container';



class SearchIndex extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = this.props.currentUser;
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
    // if (this.props.searchResults.artists) //or any other key in Obj
    // this.props.fetchArtistSongs(this.props.match.params.artistId);
    // this.props.fetchAlbumsByIds(this.props.match.params.artistId);
  }



  componentWillReceiveProps(newProps) {
    if(newProps) {

    }
  }

  toggleFollow(){
    // this.props.unfollowEntity(this.props.artist.id)
  }

  // handleSearchSubmit(){
  //
  // }




  /*-------------------------------------------------------------------*/
  handleSearchSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.fetchSearch(this.state.searchTerm);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }


  /*-------------------------------------------------------------------*/

  render() {
    if(!this.props.searchResults) {
      return null;
    }
    //
    // this.profilePic = this.props.artist.img_path;
    // this.profileTitle = this.props.artist.name;
    // this.profileAuthor = this.props.artist.artist;

    this.searchResults = this.props.searchResults;

    return (
      <div>
        <div className="main-window main">
          <header id='main-header'>

            {/*----------------------SEARCHBAR---------------------*/}
            <div id='header-search-parent'>
              <i className="fas fa-search fa-sm"></i>
              <form onSubmit={this.handleSearchSubmit}>
                <input type='text' placeholder=" searchNormal"
                  value={this.state.searchTerm} onChange={this.handleChange}
                  className="login-input" id='header-search'/>
                <button className="button-green" type="submit">search</button>
              </form>
            </div>
            {/*----------------------------------------------------*/}

            <UserSessionNavContainer/>
          </header>


          {/*-----------------Artist_Index---------------------*/}
            {/*<Route path="/library/artists"
              component={artistsIndexContainer}
            />*/}
                          <ArtistsIndex />
          {/*-----------------Album_Index---------------------*/}
            <Route path="/library/artists/:artistId"
              component={albumIndexContainer}
            />
          {/*-------------------------------------------------*/}


          <EntityIndexContainer />
        </div>

        <br/>
      </div>
    );
  }


}

export default withRouter(SearchIndex);
