import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter, Redirect } from 'react-router-dom';

import PlaylistModalContainer from './playlist/playlist_modal_container';


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.modalToggle = this.modalToggle.bind(this);
    this.state = {clickedNewPlaylist: false};
  }

  modalToggle() {
    this.setState({clickedNewPlaylist: !this.state.clickedNewPlaylist});
  }

  render() {
    return (
      <div className="sidenav">
        <div className="sidenav-content">
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
        </div>
        
        <div className='new-playlist'>
          <button onClick={() => this.modalToggle()} className='button-mono new-playlist'>
            + New Playlist
          </button>

          <PlaylistModalContainer formType='create' open={this.state.clickedNewPlaylist} modalToggle={this.modalToggle}/>
        </div>
      </div>

    );
  }
}

export default Sidebar;
