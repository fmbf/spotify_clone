import React from 'react';
import {Route} from 'react-router-dom';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import SongsIndexContainer from '../songs/songs_index_container';
import albumIndexContainer from '../albums/album_index_container';
import artistsIndexContainer from '../artists/artists_index_container';



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
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    if (this.props.searchResults.artists) //or any other key in Obj
    // this.props.fetchArtist(this.props.searchResults.artists);
    this.props.fetchArtistSongs(this.props.match.params.artistId);
    this.props.fetchAlbumsByIds(this.props.match.params.artistId);
  }



  componentWillReceiveProps(newProps) {
    if(this.props.match.params.artistId !== newProps.match.params.artistId) {
      this.props.fetchArtist(newProps.match.params.artistId);
      this.props.fetchArtistAlbums(newProps.match.params.artistId);
      this.props.fetchArtistSongs(newProps.match.params.artistId);
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
    e.preventDefault();
    // let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearch(this.state.searchTerm);
    this.props.history.push('/search');
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }


  /*-------------------------------------------------------------------*/

  render() {
    if(!this.props.artist || !this.props.artist.songs_ids) {
      return null;
    }

    this.profilePic = this.props.artist.img_path;
    this.profileTitle = this.props.artist.name;
    this.profileAuthor = this.props.artist.artist;
    this.searchResults = this.props.searchResults;

    return (
      <div>
        <div className="main-window main">
          <header id='main-header'>

            {/*----------------------SEARCHBAR---------------------*/}
            <div id='header-search-parent'>
              <i className="fas fa-search fa-sm"></i>

              <input type='search' placeholder=" search"
                value={this.state.searchTerm} onChange={this.handleChange}
                className="login-input" id='header-search'
                name="query"
                onSubmit={this.handleSearchSubmit}/>
            </div>
            {/*----------------------------------------------------*/}




            <UserSessionNavContainer/>
          </header>


          {/*-----------------Artist_Index---------------------*/}
          <ProtectedRoute exact path="/library/artists"
            component={artistsIndexContainer}
          />
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
