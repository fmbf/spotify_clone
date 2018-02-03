import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import PlayerMain from '../main_player';
import PlaylistModalContainer from '../playlist/playlist_modal_container';


class playlistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.logout.bind(this);
    this.profilePic = "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/36/42/af/3642afa1-26ec-ea06-8ecd-59b38ea5ed1f/UMG_cvrart_00602557684964_01_RGB72_1800x1800_17UMGIM97853.jpg/1200x630bb.jpg";
    {/* this.profilePic = null; */}

    this.modalToggle = this.modalToggle.bind(this);
    this.state = {clickedNewPlaylist: false};
  }


  componentDidMount() {
    this.playlist = this.props.playlists[this.props.match.params.playlistId];
  }

  modalToggle() {
    this.setState({clickedNewPlaylist: !this.state.clickedNewPlaylist});
  }


  logout() {
    this.props.logout();
  }

  render() {
    let randomTime = () => Math.floor(Math.random()*49 + 10).toString();
    let nameTitle;
    let profilePicDiv;

    /*if(!this.profilePic) {
      profilePicDiv = document.getElementById('profile-pic');
    } */

    if (this.props.playlists[this.props.match.params.playlistId]) {
      this.profilePic = this.props.playlists[this.props.match.params.playlistId].img_path;
      this.profileTitle = this.props.playlists[this.props.match.params.playlistId].title;
      this.profileDescription = this.props.playlists[this.props.match.params.playlistId].description;
      this.profileAuthor = this.props.playlists[this.props.match.params.playlistId].author;
    }

    return (

      <div>

        <div className="sidenav">
          <a href="#">Search</a>
          <h3>------------------</h3>
          <a href="#">Home</a>
          <h3>------------------</h3>
          <a href="#">Songs</a>
          <a href="#">Artists</a>
          <a href="#">Albums</a>
          <h3>------------------</h3>
          <a href="#">TGIF</a>
          <a href="#">Workout Playlist</a>
          <a href="#">House Party</a>


          <button onClick={() => this.modalToggle()} className='button-mono'>
            New Playlist
          </button>

        </div>

        <div className="main-window main">
          <div className='user-session-nav'>
            <img className='current-user-avatar' src={this.props.currentUser.img_path}/>
            <h3>{this.props.currentUser.username}</h3>
            <button onClick={this.logout} className='button-mono'>LOG OUT</button>
          </div>
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
                <button type="button" name="button" className='header-button-play'>PLAY</button>
                <button type="button" name="button" className='header-button-save'>SAVE</button>
                <button type="button" name="button">...</button>
              </div>

            </div>


          </header>

          <ol className='song-list'>
            <li><a href="#">Cut To Black | 4:49</a></li>
            <li><a href="#">Closer | 4:{randomTime()}</a></li>
            <li><a href="#">Continuum | 4:{randomTime()}</a></li>
            <li><a href="#">Higher | 1:{randomTime()}</a></li>
            <li><a href="#">Blue Shift | 2:49</a></li>
            <li><a href="#">Stepping Stone | 4:{randomTime()}</a></li>
            <li><a href="#">Time To Realize | 3:{randomTime()}</a></li>
            <li><a href="#">We Got U | 2:49</a></li>
            <li><a href="#">Last Night On Earth | 4:{randomTime()}</a></li>
            <li><a href="#">Playing To Lose | 3:{randomTime()}</a></li>
          </ol>
        </div>

        <center><h1>Playlists</h1></center>
        <br/>

        <EntityIndexContainer/>


        <PlaylistModalContainer formType='create' open={this.state.clickedNewPlaylist} modalToggle={this.modalToggle}/>


        <PlayerMain/>


      </div>
    );

  }


}

export default withRouter(playlistProfile);
