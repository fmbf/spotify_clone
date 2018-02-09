import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import SongsIndexContainer from '../songs/songs_index_container';


class albumProfile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
    this.props.fetchAlbumSongs(this.props.match.params.albumId);
  }



  componentWillReceiveProps(newProps) {
    if(this.props.match.params.albumId !== newProps.match.params.albumId) {
      this.props.fetchAlbum(newProps.match.params.albumId);
      this.props.fetchAlbumSongs(newProps.match.params.albumId);
    }
  }


  render() {
    if(!this.props || !this.props.album) {
      return null;
    }

    if (!this.props.songs) {
      // this.songs = [];</h1>
    } else {
      this.songs = this.props.songs;
    }

    this.profilePic = this.props.album.img_path;
    this.profileTitle = this.props.album.title;
    this.profileAuthor = this.props.album.artist;
    this.profileAuthorID = this.props.album.artist_id;
    this.profileSongCount = this.props.album.song_ids.length;

    return (
      <div>
        <div className="main-window main">


          <header className="profile-header">

            <div id='profile-pic-div'>
              <img id='profile-pic' src={this.profilePic}/>
            </div>


            <div className="profile-info">

              <h3>ALBUM</h3>
              <h1>{this.profileTitle}</h1>
              <h3 className='profile-description'>{this.profileDescription}</h3>
              <h3>By <strong><a href={`/#/library/artists/${this.profileAuthorID}`}>{this.profileAuthor}</a></strong>  |  {`${this.profileSongCount}`} songs, {`${Math.ceil(this.profileSongCount*3.5)}`}min </h3>

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

          {/*<Route path="library/albums/:albumId" album={this.album} songs={this.props.songs} component={SongsIndexContainer} />*/}
          <SongsIndexContainer album={this.props.album} songs={this.props.songs}/>
        </div>

        <br/>

        <EntityIndexContainer/>
      </div>
    );
  }


}

export default withRouter(albumProfile);
