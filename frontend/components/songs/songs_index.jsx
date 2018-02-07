import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

class songsIndex extends React.Component {


  toggleDropdown() {

  }

  render() {
    if (!this.props.songs) {
      return null;
    }

    return (
      <ul className='song-list'>
        {
          this.props.songs.map(albumSong => (
              <li key={albumSong.id}>

                <button className='song-list-button song-list-play button-mono'>
                  <i className="fas fa-play"></i>
                </button>

                <button className='song-list-button button-mono' onClick={this.toggleDropdown()}>
                  +
                  <div id='add-dropdown'>

                  </div>
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
