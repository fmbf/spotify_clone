import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

const artistSearchIndex = ({artists, hide, play}) => {
  if(!artists) {
    return null;
  }

  // debugger
  return (

    artists.map(artist => {
      let abbreviatedTitle = artist.name;
      if (abbreviatedTitle && abbreviatedTitle.length > 14) {
        abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
      }


      return (
          <div className={`entity-index-item animated fadeIn`} id='speed-3' key={artist.id}>
            <div className='entity-index-item-hide'
              onMouseOver={() => hide('show', artist.id)}
              onMouseOut={() => hide('hide', artist.id)}>

              <button className='playlist-ball-play-button-big big-scale'
                onClick={() => play(artist.id)}
              >
                <i
                  className="far fa-play-circle fa-5x hidden"
                  id={`hidden-${artist.id}`}
                  style={{color: '#ccc'}}>
                </i>
              </button>

              <Link to={`/library/artists/${artist.id}`}>
                <img className='entity-index-item-img index-img-big'
                     src={artist.img_path} id={artist.id}/>
              </Link>
            </div>

            <Link to={`/library/artists/${artist.id}`} className='entity-index-item-title'>
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

export default artistSearchIndex;
