import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

class songsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.currentUser = this.props.currentUser;
    this.songs = this.props.songs;
    this.album = this.props.album;
  }

  componentWillReceiveProps(newProps) {
    this.songs = newProps.album.songs;
    this.album = newProps.album;
  }



  render() {
    if (!this.songs) {

      return [];
    }

    return (
      <ul className='song-list'>
        {
          this.songs.map(albumSong => (
            <li key={albumSong.id}>
              <a>{albumSong.title} | 4:00</a>
            </li>
          ))
        }
      </ul>
    );
  }

}

export default songsIndex;
