import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

const playlistSearchIndex = ({playlists, hide, play}) => {
  if(!playlists) {
    return null;
  }

  // debugger
  return (

    playlists.map(playlist => {
      let abbreviatedTitle = playlist.title;
      if (abbreviatedTitle && abbreviatedTitle.length > 14) {
        abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
      }


      return (
          <div className={`entity-index-item animated fadeIn`} id='speed-3' key={playlist.id}>
            <div className='entity-index-item-hide'
              onMouseOver={() => hide('show', playlist.id)}
              onMouseOut={() => hide('hide', playlist.id)}>

              <button className='playlist-ball-play-button-big big-scale'
                onClick={() => play(playlist.id)}
              >
                <i
                  className="far fa-play-circle fa-5x hidden"
                  id={`hidden-${playlist.id}`}
                  style={{color: '#ccc'}}>
                </i>
              </button>

              <Link to={`/library/playlists/${playlist.id}`}>
                <img className='entity-index-item-img index-img-big'
                     src={playlist.img_path} id={playlist.id}/>
              </Link>
            </div>

            <Link to={`/library/playlists/${playlist.id}`} className='entity-index-item-title'>
              <h3 className='bubble-title'>{abbreviatedTitle}</h3>
            </Link>

            {/*
              */}
            <h3 className='entity-index-item-followcount'>
              {Math.floor(Math.random()*10000)} Followers
            </h3>

          </div>
      );
    })
  );
};

export default playlistSearchIndex;
