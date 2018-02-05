import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';



class playlistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.logout.bind(this);
    // this.profilePic = "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/36/42/af/3642afa1-26ec-ea06-8ecd-59b38ea5ed1f/UMG_cvrart_00602557684964_01_RGB72_1800x1800_17UMGIM97853.jpg/1200x630bb.jpg";
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
                <button className='button-mono header-button-more'>+</button>
              </div>

            </div>


          </header>

          <span className='song-list-fields'><h3>TITLE</h3><h3>ARTIST</h3><h3>ALBUM</h3></span>
          <ul className='song-list'>
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
          </ul>
        </div>

        <br/>

        <EntityIndexContainer/>


        {/*<PlaylistModalContainer formType='create' open={this.state.clickedNewPlaylist} modalToggle={this.modalToggle}/>*/}




      </div>
    );

  }


}

export default withRouter(playlistProfile);
