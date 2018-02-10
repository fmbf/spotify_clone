import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';
import SongsIndexContainer from '../songs/songs_index_container';


class playlistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.logout.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemoveSong = this.handleRemoveSong.bind(this);

    this.modalToggle = this.modalToggle.bind(this);
    this.state = {clickedNewPlaylist: false};
  }


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

  handleDelete() {
    const playlist = this.props.playlists[this.props.match.params.playlistId];
    this.props.deletePlaylist(playlist.id).then(() => this.props.history.push('/library/artists'));
    this.props.history.push('/library/artists');

  }


  modalToggle() {
    this.setState({clickedNewPlaylist: !this.state.clickedNewPlaylist});
  }

  toggleDropdown() {

  }


  logout() {
    this.props.logout();
  }

  handleRemoveSong(songId, playlistId){
    this.props.removeSongFromPlaylist(songId, playlistId);
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
                <button className='button-green'>PLAY</button>
                {/*<button className='button-mono'>SAVE</button>*/}
                <button className='button-mono' onClick={() => this.handleDelete()}>DELETE</button>

                {/*<button className='button-mono header-button-more'
                        onClick={() => this.handleDelete()} >
                  +
                </button>*/}
              </div>

            </div>


          </header>

          <span className='song-list-fields'><h3>TITLE</h3><h3>ARTIST</h3><h3>ALBUM</h3></span>

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



                    <a>
                      {playlistSong.title} {/*| 4:00*/}
                    </a>
                  </li>
              ))
            }
          </ul>



          {/*<SongsIndexContainer album={this.props.playlist} playlist={this.props.playlist} songs={this.props.playlist.songs_ids}/>*/}

        </div>

        <br/>

        <EntityIndexContainer/>


        {/*<PlaylistModalContainer formType='create' open={this.state.clickedNewPlaylist} modalToggle={this.modalToggle}/>*/}




      </div>
    );

  }


}

export default withRouter(playlistProfile);
