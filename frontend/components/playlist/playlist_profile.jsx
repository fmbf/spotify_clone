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
              <h3>Created by <strong><a href="#">{this.profileAuthor}</a></strong>  |  {`${this.profileSongCount}`} songs, 55min </h3>

              <div className="profile-button-box">
                <button className='button-green'>PLAY</button>
                <button className='button-mono'>SAVE</button>

                <button className='button-mono header-button-more'
                        onClick={() => this.handleDelete()} >
                  +
                </button>
              </div>

            </div>


          </header>

          <span className='song-list-fields'><h3>TITLE</h3><h3>ARTIST</h3><h3>ALBUM</h3></span>

          {/*<ul className='song-list'>
            <li><a>Cut To Black | 4:49</a></li>
            <li><a>Closer | 4:{randomTime()}</a></li>
            <li><a>Continuum | 4:{randomTime()}</a></li>
            <li><a>Higher | 1:{randomTime()}</a></li>
            <li><a>Blue Shift | 2:49</a></li>
            <li><a>Stepping Stone | 4:{randomTime()}</a></li>
            <li><a>Time To Realize | 3:{randomTime()}</a></li>
            <li><a>We Got U | 2:49</a></li>
            <li><a>Last Night On Earth | 4:{randomTime()}</a></li>
            <li><a>Playing To Lose | 3:{randomTime()}</a></li>
          </ul>*/}

          <ul className='song-list'>
            {
              this.props.songs.map(playlistSong => (
                  <li key={playlistSong.id}>

                    <button className='song-list-button song-list-play button-mono'>
                      <i className="fas fa-play"></i>
                    </button>

                    <button className='song-list-button button-mono' onClick={this.toggleDropdown()}>
                      +
                      <div id='add-dropdown'>

                      </div>
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
