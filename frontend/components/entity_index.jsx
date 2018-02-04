import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class entityIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.hideSwitch = this.hideSwitch.bind(this);
    this.playBubble = this.playBubble.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists(this.currentUser.id);
  }

  componentWillReceiveProps(newProps){
    if (newProps && newProps.location) {
      if (newProps.location.pathname !== this.props.location.pathname){
        {/*return window.scrollTo(0, 0);*/}
      }
    }
  }

  playBubble(playlistId){
    console.log(`now playing playlis ${playlistId}`);
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
    return (
      <section className='entity-index-container'>
        <h1>Playlists</h1>
        <br/>
        <ul className='entity-index animated fadeInUp'>
          {
            this.props.playlists.map(playlist => {

              let abbreviatedTitle = playlist.title;
              if (abbreviatedTitle && abbreviatedTitle.length > 14) {
                abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
              }
              return (
              <div className='entity-index-item' key={playlist.id}>
                <div className='entity-index-item-hide'
                  onMouseOver={() => this.hideSwitch('show', playlist.id)}
                  onMouseOut={() => this.hideSwitch('hide', playlist.id)}>

                  <button className='playlist-ball-play-button' onClick={() => this.playBubble(playlist.id)}>
                    <i className="fa fa-play-circle fa-3x hidden"id={`hidden-${playlist.id}`}></i>
                  </button>

                  <img className='entity-index-item-img'
                       src={playlist.img_path} id={playlist.id}
                  />
                </div>

                <Link to={`/library/playlists/${playlist.id}`} className='entity-index-item-title'>
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


export default entityIndex;
