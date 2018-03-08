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
    this.state = { followed: false };

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }

  //////////////////////////////////////////////////
  // Life Cycle
  //////////////////////////////////////////////////

  componentDidMount() {

    this.props.fetchArtist(this.props.match.params.artistId);
    this.props.fetchArtistSongs(this.props.match.params.artistId);
    this.props.fetchArtistAlbums(this.props.match.params.artistId);
    this.setState({ followed: this.followed });

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
    this.setState({ followed: !this.followed });
  }

  //////////////////////////////////////////////////
  // Playback
  //////////////////////////////////////////////////

  playAudio() {
    if(this.props.audio.currentSong) {
      this.props.togglePlay();
    }
  }

  pauseAudio() {
    if(this.props.audio.currentSong) {
      this.props.togglePlay();
    }
  }

  //////////////////////////////////////////////////
  // Render
  //////////////////////////////////////////////////

  greenButton(){
    if(this.props.audio.playing) {
      return <button className='button-green' onClick={this.pauseAudio}>PAUSE</button>
    } else {
      return <button className='button-green' onClick={this.playAudio}>PLAY</button>;
    }
  }


  render() {
    if(!this.props.artist || !this.props.artist.songs_ids) {
      return null;
    }

    this.profilePic = this.props.artist.img_path;
    this.followed = this.props.artist.current_user_follows;
    this.profileTitle = this.props.artist.name;

    this.searchResults = this.props.searchResults;

    let followDisplayStatus = this.followed ? 'Unfollow' : 'Follow';
    return (
      <div>
        <div className="main-window main">

          <header className="profile-header">

            <div id='profile-pic-div'>
              <img id='profile-pic' src={this.profilePic}/>
            </div>


            <div className="profile-info">

              <h3>ARTIST</h3>
              <h1>{this.profileTitle}</h1>
              <h3 className='profile-description'>{this.profileDescription}</h3>
              {/*<h3>Created by: <strong><a href="#">{this.profileAuthor}</a></strong>  |  14 songs, 55min </h3>*/}
              <h3><strong>{`${this.props.artist.followers}`} Followers</strong>  |  {`${this.props.artist.songs_ids.length}`} songs, 55min </h3>

              <div className="profile-button-box">
                {this.greenButton()}
                <button className='button-mono'
                  onClick={() => this.toggleFollow}
                  >
                  FOLLOW
                </button>

                <button className='button-mono header-button-more'>
                  <i className="fas fa-caret-down fa-xs"></i>
                </button>
              </div>

            </div>


          </header>

          <span className='song-list-fields'><h3>TITLE</h3><h3>ARTIST</h3><h3>ALBUM</h3></span>
          <SongsIndexContainer album={this.props.album} songs={this.props.songs}/>

          <Route path="/library/artists/:artistId" component={albumIndexContainer}/>

          {/*<EntityIndexContainer/>*/}
        </div>

        <br/>
      </div>
    );
  }


}

export default withRouter(artistProfile);
