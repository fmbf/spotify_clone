import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import UserSessionNavContainer from './user_session_nav/user_session_nav_container';

class artistsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.hideSwitch = this.hideSwitch.bind(this);
    this.playBubble = this.playBubble.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtists(this.currentUser.id);
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
    if (!this.props.artists) {
      return null;
    }

    return (
      <section className='entity-index-container'>

        <header id='main-header'>
          <div className='header-search-parent'>
            SEARCH
          </div>
          
          <UserSessionNavContainer/>
        </header>

        <h1>Artists</h1>
        <br/>
        <ul className='entity-index'>
          {
            this.props.artists.map(artist => {

              let abbreviatedTitle = artist.name;
              if (abbreviatedTitle && abbreviatedTitle.length > 14) {
                abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
              }
              return (
              <div className={`entity-index-item animated fadeInUp speed-${artist.id%6+1}`} key={artist.id}>
                <div className='entity-index-item-hide'
                  onMouseOver={() => this.hideSwitch('show', artist.id)}
                  onMouseOut={() => this.hideSwitch('hide', artist.id)}>

                  <button className='playlist-ball-play-button-big' onClick={() => this.playBubble(artist.id)}>
                    <i className="fa fa-play-circle fa-3x hidden" id={`hidden-${artist.id}`}></i>
                  </button>

                  <img className='entity-index-item-img index-img-big'
                       src={artist.img_path} id={artist.id}
                  />
                </div>

                <Link to={`/library/artists/${artist.id}`} className='entity-index-item-title'>
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


export default artistsIndex;
