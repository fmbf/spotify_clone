import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import SongsIndexContainer from '../songs/songs_index_container';


class albumProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followed: false };

    this.currentUser = this.props.currentUser;
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.replaceQueueThenPlay = this.replaceQueueThenPlay.bind(this);
  }

  //////////////////////////////////////////////////
  // Life Cycle
  //////////////////////////////////////////////////

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
    this.props.fetchAlbumSongs(this.props.match.params.albumId);
    // this.props.queueSongsReplace(this.props.songs);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.params.albumId !== newProps.match.params.albumId) {
      this.props.fetchAlbum(newProps.match.params.albumId);
      this.props.fetchAlbumSongs(newProps.match.params.albumId);
    }
  }

  //////////////////////////////////////////////////
  // Playback
  //////////////////////////////////////////////////

  replaceQueueThenPlay(){
    // this.props.audio.albumId === this.props.album.id
    if (this.props.audio.playing) {
      this.pauseAudio();
    }

    this.props.queueSongsReplace(this.props.songs);

    // if (!this.props.audio.currentSong) {
    //   debugger
    // }

    setTimeout( () => this.playAudio(), 100 );
  }

  playAudio() {
    if(this.props.audio.currentSong) {
      this.props.togglePlay();
    }
  }

  pauseAudio() {
    if(this.props.audio.currentSong) {
      this.props.togglePlay();
    }
  }

  //////////////////////////////////////////////////
  // Follows
  //////////////////////////////////////////////////

  toggleFollow(){
    // console.log('before click: following?', this.props.album.current_user_follows);
    // console.log('toggle following entityID', this.props.match.params.albumId);
    this.setState({ followed: !this.state.followed });
    // console.log('after click: following?', this.props.album.current_user_follows);
  }

  //////////////////////////////////////////////////
  // Render
  //////////////////////////////////////////////////

  greenButton(){
    // if currently playing album id === me, then just pause/play toggle
    // else replace the queue

    if (this.props.audio.albumId === this.props.album.id) {
      if(this.props.audio.playing) {
        return <button className='button-green' onClick={this.pauseAudio}>PAUSE</button>
      } else {
        return <button className='button-green' onClick={this.playAudio}>PLAY</button>;
      }
    } else {
      return <button className='button-green' onClick={this.replaceQueueThenPlay}>PLAY</button>;
    }
  }

  blackButton(){
    // if(this.props.album.current_user_follows) {
    if(this.state.followed) {
      return <button className='button-mono' onClick={this.toggleFollow}>SAVED</button>;
    } else {
      return <button className='button-mono' onClick={this.toggleFollow}>SAVE</button>;
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
                {this.greenButton()}
                {this.blackButton()}

                <button className='button-mono header-button-more'>
                  <i className="fas fa-caret-down fa-xs"></i>
                </button>
              </div>
            </div>
          </header>


          <SongsIndexContainer album={this.props.album} songs={this.props.songs}/>
        </div>

        <br/>

        <EntityIndexContainer/>
      </div>
    );
  }


}

export default withRouter(albumProfile);
