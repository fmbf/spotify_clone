import React from 'react';
import {Route} from 'react-router-dom';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import SongsIndexContainer from '../songs/songs_index_container';


class albumProfile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = props.currentUser;
  }

  componentDidMount() {
    if (this.props){
      this.props.fetchAlbum(this.props.match.params.albumId);
    }
    this.props.fetchAlbumSongs(this.props.match.params.albumId);
  }



  componentWillReceiveProps(newProps) {
    if(this.props.match.params.albumId !== newProps.match.params.albumId) {
      this.props.fetchAlbum(newProps.match.params.albumId);
      this.props.fetchAlbumSongs(newProps.match.params.albumId);
    }

    if(newProps.album) {
      this.album = newProps.album;
      this.profilePic = newProps.album.img_path;
      this.profileTitle = newProps.album.title;
      this.profileAuthor = newProps.album.artist;
      this.profileAuthorID = this.props.album.artist_id;
    }

    if(newProps.songs) {
      this.songs = newProps.songs;
    }
  }


  render() {
    if(!this.props || !this.props.album) {
      return null;
    }

    // if (!this.props.songs) {
    //   this.songs = [];
    // } else {
    //
    //   this.songs = this.props.songs;
    // }

    this.album = this.props.album;

    this.profilePic = this.props.album.img_path;
    this.profileTitle = this.props.album.title;
    this.profileAuthor = this.props.album.artist;
    this.profileAuthorID = this.props.album.artist_id;
    //
    // if (this.props.album) {
    //   this.profilePic = this.props.album.img_path;
    //   this.profileTitle = this.props.album.title;
    //   this.profileAuthor = this.props.artist;
    // }





    return (
      <div>
        <div className="main-window main">
          <header id='main-header'>
            <div id='header-search-parent'>
              <i className="fas fa-search fa-sm"></i>
              <input type='search' placeholder=" search" className="login-input" id='header-search'/>
            </div>

            <UserSessionNavContainer/>
          </header>

          <header className="profile-header">

            <div id='profile-pic-div'>
              <img id='profile-pic' src={this.profilePic}/>
            </div>


            <div className="profile-info">

              <h3>ALBUM</h3>
              <h1>{this.profileTitle}</h1>
              <h3 className='profile-description'>{this.profileDescription}</h3>
              <h3>Created by: <strong><a href={`/#/library/artists/${this.profileAuthorID}`}>{this.profileAuthor}</a></strong>  |  {`${this.props.album.song_ids.length}`} songs, 55min </h3>

              <div className="profile-button-box">
                <button className='button-green'>PLAY</button>
                <button className='button-mono'>SAVE</button>

                <button className='button-mono header-button-more'>
                  <i className="fas fa-caret-down fa-xs"></i>
                </button>
              </div>

            </div>


          </header>

          <span className='song-list-fields'><h3>TITLE</h3><h3>ARTIST</h3><h3>ALBUM</h3></span>

          {/*<SongsIndexContainer album={this.props.album} songs={this.songs}/>*/}
          <Route path="library/albums/:albumId" album={this.album} songs={this.props.songs} component={SongsIndexContainer} />
        </div>

        <br/>

        <EntityIndexContainer/>
      </div>
    );
  }


}

export default withRouter(albumProfile);
