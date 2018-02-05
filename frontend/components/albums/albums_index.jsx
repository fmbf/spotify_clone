import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import UserSessionNavContainer from '../user_session_nav/user_session_nav_container';

class albumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.hideSwitch = this.hideSwitch.bind(this);
    this.playBubble = this.playBubble.bind(this);
  }

  componentDidMount() {
    if (this.props.match.path === '/library/albums') {
      this.props.fetchUserAlbums(this.currentUser.id);
    }
    // debugger
    if (this.props.match.path === '/library/artists/:artistId/albums') {
      this.props.fetchArtistAlbums(this.props.match.params.artistId);
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps && newProps.location) {
      if (newProps.location.pathname !== this.props.location.pathname){
        {/*return window.scrollTo(0, 0);*/}
      }
    }
  }

  playBubble(playlistId){
    console.log(`now playing playlist ${playlistId}`);
  }

  hideSwitch(action, id) {
    let playButton = document.getElementById(`hidden-${id}`);
    let img = document.getElementById(id);

    if (action === 'show') {
      playButton.style.opacity = '1.0';
      img.style.borderColor = '#1bc156';
      img.style.opacity = '0.5';
    } else {
      playButton.style.opacity = '0.0';
      img.style.borderColor = '#ddd';
      img.style.opacity = '1.0';
    }
  }

  render() {
    if (!this.props.albums) {
      return null;
    }

    return (
      <section className='entity-index-container'>

        <header id='main-header'>
          <div id='header-search-parent'>
            <i className="fas fa-search fa-sm"></i>
            <input type='search' placeholder=" search" className="login-input" id='header-search'/>
          </div>

          <UserSessionNavContainer/>
        </header>

        <h1>Albums</h1>
        <br/>
        <ul className='entity-index'>
          {
            this.props.albums.map(album => {

              let abbreviatedTitle = album.title;
              if (abbreviatedTitle && abbreviatedTitle.length > 14) {
                abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
              }

              let randomAnimateSpeed = Math.floor(Math.random() * 5) + 1;
              
              return (
              <div className={`entity-index-item animated fadeInUp speed-${randomAnimateSpeed}`} key={album.id}>
                <div className='entity-index-item-hide'
                  onMouseOver={() => this.hideSwitch('show', album.id)}
                  onMouseOut={() => this.hideSwitch('hide', album.id)}>

                  <button className='playlist-ball-play-button-big' onClick={() => this.playBubble(album.id)}>
                    <i className="fa fa-play-circle fa-3x hidden" id={`hidden-${album.id}`}></i>
                  </button>

                  <img className='entity-index-item-img index-img-big'
                       src={album.img_path} id={album.id}
                  />
                </div>

                <Link to={`/library/albums/${album.id}`} className='entity-index-item-title'>
                  <h3>{abbreviatedTitle}</h3>
                </Link>

                <h3 className='entity-index-item-followcount'>
                  {Math.floor(Math.random()*10000)} Followers
                </h3>
              </div>
              );
            })
          }
        </ul>
      </section>
    );
  }
}


export default albumsIndex;
