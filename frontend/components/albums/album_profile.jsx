import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import SongsIndexContainer from '../songs/songs_index_container';


class albumProfile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;

    // this.state = {
    //   clickedNewPlaylist: false,
    //   album: this.props.album,
    //   songs: this.props.songs
    // };
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
      // .then(newAlbum => this.setState({album: newAlbum}));

    this.props.fetchAlbumSongs(this.props.match.params.albumId);
      // .then(newSongs => this.setState({songs: newSongs}));
    // debugger
  }



  componentWillReceiveProps(newProps) {
    if(this.props.match.params.albumId !== newProps.match.params.albumId) {
      this.props.fetchAlbum(newProps.match.params.albumId);
        // .then(newAlbum => this.setState({album: newAlbum}));

      this.props.fetchAlbumSongs(newProps.match.params.albumId);
        // .then(newSongs => this.setState({songs: newSongs}));
    }
  }


  render() {
    if(!this.props || !this.props.album) {
      return null;
    }

    if (!this.props.songs) {
      this.songs = [];
    } else {
      // debugger
      this.songs = this.props.songs;
    }

    this.profilePic = this.props.album.img_path;
    this.profileTitle = this.props.album.title;
    this.profileAuthor = this.props.album.artist;

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

              <h3>PLAYLIST</h3>
              <h1>{this.profileTitle}</h1>
              <h3 className='profile-description'>{this.profileDescription}</h3>
              <h3>Created by: <strong><a href="#">{this.profileAuthor}</a></strong>  |  14 songs, 55min </h3>

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

          <SongsIndexContainer album={this.props.album} songs={this.props.songs}/>

        </div>

        <br/>

        <EntityIndexContainer/>
      </div>
    );
  }


}

export default withRouter(albumProfile);
