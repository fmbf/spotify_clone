import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';
import SongsIndexContainer from '../songs/songs_index_container';


class playlistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemoveSong = this.handleRemoveSong.bind(this);

    this.state = {clickedNewPlaylist: false};

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.replaceQueueThenPlay = this.replaceQueueThenPlay.bind(this);
  }

  //////////////////////////////////////////////////
  // Life Cycle
  //////////////////////////////////////////////////

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchPlaylistSongs(this.props.match.params.playlistId);
    this.playlist = this.props.playlists[this.props.match.params.playlistId];
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.params.playlistId !== newProps.match.params.playlistId) {
      this.props.fetchPlaylist(newProps.match.params.playlistId);
      this.props.fetchPlaylistSongs(this.props.match.params.playlistId);
    }
  }

  //////////////////////////////////////////////////
  // Playlist Actions
  //////////////////////////////////////////////////

  handleDelete() {
    const playlist = this.props.playlists[this.props.match.params.playlistId];
    this.props.deletePlaylist(playlist.id).then(() => this.props.history.push('/library/artists'));
    this.props.history.push('/library/artists');

  }

  handleRemoveSong(songId, playlistId){
    this.props.removeSongFromPlaylist(songId, playlistId);
    console.log('removed song/playlist', songId, playlistId);
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
  // Render
  //////////////////////////////////////////////////

  greenButton(){
    // if(this.props.audio.playing) {
    //   return <button className='button-green' onClick={this.pauseAudio}>PAUSE</button>;
    // } else {
    //   return <button className='button-green' onClick={this.replaceQueueThenPlay}>PLAY</button>;
    // }

    return <button className='button-green' onClick={this.replaceQueueThenPlay}>PLAY</button>;

  }

  blackButton(){
    if(this.props.playlist.current_user_owns) {
      return null;
    }

    if(this.props.playlist.current_user_follows) {
      return <button className='button-mono' onClick={this.toggleFollow}>SAVED</button>;
    } else {
      return <button className='button-mono' onClick={this.toggleFollow}>SAVE</button>;
    }
  }

  blackButtonDelete(){
    if(this.props.playlist.current_user_owns) {
      return <button className='button-mono' onClick={() => this.handleDelete()}>DELETE</button>;
    } else {
      return null;
    }
  }



  render() {
    let randomTime = () => Math.floor(Math.random()*49 + 10).toString();

    if(!this.props || !this.props.playlists[this.props.match.params.playlistId]) {
      return null;
    }

    if (this.props.playlists[this.props.match.params.playlistId]) {
      this.profilePic = this.props.playlists[this.props.match.params.playlistId].img_path;
      this.profileTitle = this.props.playlists[this.props.match.params.playlistId].title;
      this.profileDescription = this.props.playlists[this.props.match.params.playlistId].description;
      this.profileAuthor = this.props.playlists[this.props.match.params.playlistId].author;
      // this.profileSongCount = this.props.playlist.song_ids.length;
    }

    return (

      <div>
        <div className="main-window main">
          <header className="profile-header">

            <div id='profile-pic-div'>
              <img id='profile-pic' src={this.profilePic}/>
            </div>


            <div className="profile-info">

              <h3>PLAYLIST</h3>
              <h1>{this.profileTitle}</h1>
              <h3 className='profile-description'>{this.profileDescription}</h3>
              <h3>Created by <strong><a href="#">{this.profileAuthor}</a></strong>  |  {`${this.profileSongCount || '0'}`} songs, 55min </h3>

              <div className="profile-button-box">
                {this.greenButton()}
                {this.blackButton()}
                {this.blackButtonDelete()}
                {/*<button className='button-mono' onClick={() => this.handleDelete()}>DELETE</button>*/}
              </div>

            </div>


          </header>

          {/*<span className='song-list-fields'><h3>TITLE</h3><h3>ARTIST</h3><h3>ALBUM</h3></span>*/}

          <ul className='song-list'>
            {
              this.props.songs.map(playlistSong => (
                  <li key={playlistSong.id} className='track-li'>

                    <button className='song-list-button song-list-play button-mono'>
                      <i className="fas fa-play"></i>
                    </button>

                    <button className={`song-list-button button-mono plus-circle`}
                            onClick={() => this.props.removeSongFromPlaylist(playlistSong.id, this.props.playlist.id)}
                            >
                            -
                    </button>


                    <div className='song-list-track-info'>
                      <a className='song-list-track-info-item'>
                        {playlistSong.title}
                      </a>
                      <a className='song-list-track-info-item'>
                        {playlistSong.artist}
                      </a>
                      <a className='song-list-track-info-item'>
                        {playlistSong.album}
                      </a>
                    </div>
                  </li>
              ))
            }
          </ul>



          {/*
            <SongsIndexContainer album={this.props.playlist} playlist={this.props.playlist} songs={this.props.playlist.songs_ids}/>
            */}

        </div>

        <br/>

        <EntityIndexContainer/>


        {/*<PlaylistModalContainer formType='create' open={this.state.clickedNewPlaylist} modalToggle={this.modalToggle}/>*/}




      </div>
    );

  }


}

export default withRouter(playlistProfile);
