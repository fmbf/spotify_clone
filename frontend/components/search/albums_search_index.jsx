import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

const albumSearchIndex = ({albums, hide, play}) => {
  if(!albums) {
    return null;
  }

  // debugger
  return (

    albums.map(album => {
      let abbreviatedTitle = album.title;
      if (abbreviatedTitle && abbreviatedTitle.length > 14) {
        abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
      }


      return (
          <div className={`entity-index-item animated fadeIn`} id='speed-3' key={album.id}>
            <div className='entity-index-item-hide'
              onMouseOver={() => hide('show', album.id)}
              onMouseOut={() => hide('hide', album.id)}>

              <button className='playlist-ball-play-button-big big-scale'
                onClick={() => play(album.id)}
              >
                <i
                  className="far fa-play-circle fa-5x hidden"
                  id={`hidden-${album.id}`}
                  style={{color: '#ccc'}}>
                </i>
              </button>

              <Link to={`/library/albums/${album.id}`}>
                <img className='entity-index-item-img index-img-big'
                     src={album.img_path} id={album.id}/>
              </Link>
            </div>

            <Link to={`/library/albums/${album.id}`} className='entity-index-item-title'>
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

export default albumSearchIndex;
