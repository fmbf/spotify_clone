import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class albumIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.hideSwitch = this.hideSwitch.bind(this);
    this.playBubble = this.playBubble.bind(this);
  }


  playBubble(playlistId){
    // console.log(`now playing playlist ${playlistId}`);
  }

  hideSwitch(action, id) {
    let playButton = document.getElementById(`hidden-${id}`);
    let img = document.getElementById(id);

    if (action === 'show') {
      playButton.style.opacity = '1.0';
      playButton.style.color = '#282828'; // button color main
      img.style.borderColor = '#1bc156';
      img.style.opacity = '0.5';
      // img.style.filter = 'blur(3px);';
    } else {
      playButton.style.opacity = '0.0';
      playButton.style.color = '#ccc'; // button color transitional
      // img.style.borderColor = '#ddd';
      img.style.borderColor = '#fff';
      img.style.opacity = '1.0';
      // img.style.filter = 'blur(0px);';
    }
  }

  render() {
    return (
      this.props.albums.map(album => {

        let abbreviatedTitle = album.title;
        if (abbreviatedTitle && abbreviatedTitle.length > 14) {
          abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
        }

        let randomAnimateSpeed = Math.floor(Math.random() * 5) + 1;
        return (

            <div className={`entity-index-item animated fadeIn`} key={album.id}>

              <div className='entity-index-item-hide'
                onMouseOver={() => this.hideSwitch('show', album.id)}
                onMouseOut={() => this.hideSwitch('hide', album.id)}>

                <button className='playlist-ball-play-button-big big-scale' onClick={() => this.playBubble(album.id)}>
                  <i
                    className="far fa-play-circle fa-5x hidden"
                    id={`hidden-${album.id}`}
                    style={{color: '#ccc'}}
                    ></i>
                </button>

                <Link to={`/library/albums/${album.id}`}>
                  <img className='entity-index-item-img index-img-big'
                       src={album.img_path} id={album.id}
                  />
                </Link>

              </div>

              <Link to={`/library/albums/${album.id}`} className='entity-index-item-title'>
                <h3 className='bubble-title'>{abbreviatedTitle}</h3>
              </Link>

              {/*<h3 className='entity-index-item-followcount'>
                {Math.floor(Math.random()*10000)} Followers
              </h3>*/}

            </div>

        );
      })
    );
  }
}

export default albumIndexItem;
