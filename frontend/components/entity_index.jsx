import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class entityIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.unHide = this.unHide.bind(this);
    this.reHide = this.reHide.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists(4);
  }

  unHide(id) {
    let node = document.getElementById(`hidden-${id}`);
    node.style.opacity = '1.0';

    let img = document.getElementById(id);
    img.style.borderColor = '#1bc156';
    img.style.opacity = '0.5';
  }

  reHide(id) {
    let node = document.getElementById(`hidden-${id}`);
    let img = document.getElementById(id);

    node.style.opacity = '0.0';
    img.style.borderColor = '#ddd';
    img.style.opacity = '1.0';
  }

  render() {
    return (
      <section>
        <ul className='entity-index'>
          {
            this.props.playlists.map(playlist => {

              let abbreviatedTitle = playlist.title;
              if (abbreviatedTitle && abbreviatedTitle.length > 14) {
                abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
              }
              return (
              <div className='entity-index-item' key={playlist.id}>
                <div className='entity-index-item-hide'
                  onMouseOver={() => this.unHide(playlist.id)}
                  onMouseOut={() => this.reHide(playlist.id)}>
                  <i className="fa fa-play-circle fa-3x hidden"id={`hidden-${playlist.id}`}></i>

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
