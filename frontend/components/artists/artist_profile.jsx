import React from 'react';
import {Route} from 'react-router-dom';
import { Link, withRouter, Redirect } from 'react-router-dom';

import EntityIndexContainer from '../entity_index_container';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

import SongsIndexContainer from '../songs/songs_index_container';
import AlbumsIndexContainer from '../albums/album_index_container';
import albumIndexContainer from '../albums/album_index_container';


class artistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;

  }

  componentDidMount() {

    this.props.fetchArtist(this.props.match.params.artistId);
    this.props.fetchArtistSongs(this.props.match.params.artistId);
    this.props.fetchArtistAlbums(this.props.match.params.artistId);

    // this.recentAlbum = this.props.albums[this.props.albums.length - 1];
  }



  componentWillReceiveProps(newProps) {
    if(this.props.match.params.artistId !== newProps.match.params.artistId) {
      this.props.fetchArtist(newProps.match.params.artistId);
      this.props.fetchArtistAlbums(newProps.match.params.artistId);
      this.props.fetchArtistSongs(newProps.match.params.artistId);
    }
  }

  toggleFollow(){
    // this.props.unfollowEntity(this.props.artist.id)
  }


  render() {
    if(!this.props.artist || !this.props.artist.songs_ids) {
      return null;
    }

    this.profilePic = this.props.artist.img_path;
    this.profileTitle = this.props.artist.name;
    this.profileAuthor = this.props.artist.artist;

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

              <h3>ARTIST</h3>
              <h1>{this.profileTitle}</h1>
              <h3 className='profile-description'>{this.profileDescription}</h3>
              {/*<h3>Created by: <strong><a href="#">{this.profileAuthor}</a></strong>  |  14 songs, 55min </h3>*/}
              <h3><strong>12376123 Followers</strong>  |  {`${this.props.artist.songs_ids.length}`} songs, 55min </h3>

              <div className="profile-button-box">
                <button className='button-green'>PLAY</button>
                <button className='button-mono'>FOLLOW</button>

                <button className='button-mono header-button-more'>
                  <i className="fas fa-caret-down fa-xs"></i>
                </button>
              </div>

            </div>


          </header>

          <span className='song-list-fields'><h3>TITLE</h3><h3>ARTIST</h3><h3>ALBUM</h3></span>



            {/*<ul className='song-list'>
              <li><a>Cut To Black | 4:49</a></li>
              <li><a>Closer | 4:00</a></li>
              <li><a>Continuum | 4:00</a></li>
              <li><a>Higher | 1:00</a></li>
              <li><a>Blue Shift | 2:49</a></li>
              <li><a>Stepping Stone | 4:00</a></li>
              <li><a>Time To Realize | 3:00</a></li>
              <li><a>We Got U | 2:49</a></li>
              <li><a>Last Night On Earth | 4:00</a></li>
              <li><a>Playing To Lose | 3:00</a></li>
            </ul>*/}

          {/*<SongsIndexContainer album={this.recentAlbum} songs={this.recentAlbum.songs}/>*/}
          {/*<AlbumsIndexContainer album={this.props.album} songs={this.props.songs}/>*/}
            <Route path="/library/artists/:artistId"
                            component={albumIndexContainer}
            />
          {/*<AlbumsIndexContainer artist={this.props.artist}/>*/}
          <EntityIndexContainer />
        </div>

        <br/>
      </div>
    );
  }


}

export default withRouter(artistProfile);
