import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

class songsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.buildDropdown = this.buildDropdown.bind(this);
    this.hideSwitch = this.hideSwitch.bind(this);

    this.timeout;

    this.playBubble = this.playBubble.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.songs = this.props.songs;
  }

  //////////////////////////////////////////////////
  // Life Cycle
  //////////////////////////////////////////////////

  componentDidMount(){
    // debugger
    if (this.props.match.params.artistId) {
      this.songs = this.props.songs.slice(0, 5);
    }
  }

  //////////////////////////////////////////////////
  // playBubble
  //////////////////////////////////////////////////

  playBubble(entityId){
    console.log(`now playing song ${entityId}`);
    // let songs = Object.values(this.props.allSongs).filter(song => song.album_id === entityId);
    // console.log('this.props.songs:', this.props.songs);


    let prevSongs = this.songs.filter(song => song.id < entityId);

    let nextSongs = this.songs.filter(song => song.id >= entityId);

    this.props.queueSongsReplace(nextSongs);
    this.props.queueHistoryReplace(prevSongs.reverse());

    setTimeout( () => this.playAudio(), 100 );
  }

  //////////////////////////////////////////////////
  // Playback
  //////////////////////////////////////////////////

  playAudio() {
    // if(this.props.audio.currentSong) {
    // }

    if(!this.props.audio.playing) {
      this.props.togglePlay();
    } else {
      this.props.togglePlay();
      this.props.togglePlay();
    }
  }

  // pauseAudio() {
  //   if(this.props.audio.currentSong) {
  //     this.props.togglePlay();
  //   }
  // }


  //////////////////////////////////////////////////
  // Dropdown Menu
  //////////////////////////////////////////////////

  buildDropdown(albumSongId) {
    let li = document.getElementById(`hidden-playlist-li-${albumSongId}`);

    return this.props.playlists.map((playlist) => (

      <li key={playlist.id} id={`hidden-playlist-li-${albumSongId}`}
        className='hidden-playlist-li'
        onClick={() => {
            this.props.addSongToPlaylist(albumSongId, playlist.id);
          }
        }
        >

        {playlist.title}

      </li>
    ));
  }

  hideSwitch(action, id) {
    let dropDownUL = document.getElementById(`playlist-select-ul-${id}`);
    let songRow = document.getElementById(id);

    if (action === 'show') {
      clearTimeout(this.timeout);
      dropDownUL.style.display = 'block';
      dropDownUL.style.color = '#282828'; // button color main

    } else {
      this.timeout = setTimeout(
        () => {
          dropDownUL.style.display = 'none';
          dropDownUL.style.color = '#ccc'; // button color transitional
        },
        500 // wait time before hide
      );
    }
  }

  //////////////////////////////////////////////////
  // Render
  //////////////////////////////////////////////////

  render() {
    if (!this.songs) {
      return null;
    }
    // debugger
    return (
      <ul className='song-list'>
        {
          this.songs.map(albumSong => (
              <li key={albumSong.id} className='track-li'>

                <button className='song-list-button song-list-play button-mono'
                        onClick={() => this.playBubble(albumSong.id)}>
                  <i className="fas fa-play"></i>
                </button>

                <button className={`song-list-button button-mono plus-circle`}
                        onClick={() => this.hideSwitch('show', albumSong.id)}
                        >
                        <i className="fas fa-plus"></i>
                        <ul id={`playlist-select-ul-${albumSong.id}`}
                            className='playlist-select-ul'
                            onMouseOver={() => this.hideSwitch('show', albumSong.id)}
                            onMouseLeave={() => this.hideSwitch('hide', albumSong.id)}>
                          {this.buildDropdown(albumSong.id)}
                        </ul>
                </button>




                <a>
                  {albumSong.title} {/*| 4:00*/}
                </a>
              </li>
          ))
        }
      </ul>
    );
  }

}

export default songsIndex;
