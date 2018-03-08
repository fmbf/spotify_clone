import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import AlbumIndexItem from './album_index_item';

class albumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.hideSwitch = this.hideSwitch.bind(this);
    // this.playBubble = this.playBubble.bind(this);
    // this.playAudio = this.playAudio.bind(this);
  }

  //////////////////////////////////////////////////
  // Life Cycle
  //////////////////////////////////////////////////

  componentDidMount() {
    if (this.props && this.props.match.params.artistId) {
      this.props.fetchArtistAlbums(this.props.match.params.artistId);
    } else {
      this.props.fetchUserAlbums(this.props.currentUser.id);
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.location.pathname !== newProps.location.pathname &&
        newProps.match.params.artistId){

      this.props.fetchArtistAlbums(newProps.match.params.artistId);
    }

  }

  //////////////////////////////////////////////////
  // playBubble
  //////////////////////////////////////////////////

  // playBubble(playlistId){
  //   // console.log(`now playing playlist ${playlistId}`);
  //   this.playAudio();
  // }

  hideSwitch(action, id) {
    let playButton = document.getElementById(`hidden-${id}`);
    let img = document.getElementById(id);

    if (action === 'show') {
      playButton.style.opacity = '1.0';
      playButton.style.color = '#282828'; // button color main
      img.style.borderColor = '#1bc156';
      img.style.opacity = '0.5';
      // img.style.filter = 'blur(3px);';
    } else {
      playButton.style.opacity = '0.0';
      playButton.style.color = '#ccc'; // button color transitional
      // img.style.borderColor = '#ddd';
      img.style.borderColor = '#fff';
      img.style.opacity = '1.0';
      // img.style.filter = 'blur(0px);';
    }
  }

  //////////////////////////////////////////////////
  // Playback
  //////////////////////////////////////////////////

  playAudio() {
    if(this.props.audio.currentSong) {
      this.props.togglePlay();
    }
  }


  //////////////////////////////////////////////////
  // Render
  //////////////////////////////////////////////////

  render() {
    if (!this.props.albums) {
      return null;
    }

    // debugger
    return (
      <section className='entity-index-container'>



        <h1>Albums</h1>
        <br/>
        <ul className='entity-index'>
          {
            <AlbumIndexItem
              audio={this.props.audio}
              togglePlay={this.props.togglePlay}
              fetchAlbumSongs={this.props.fetchAlbumSongs}
              albums={this.props.albums}/>
          }
        </ul>
      </section>
    );
  }
}


export default albumsIndex;
