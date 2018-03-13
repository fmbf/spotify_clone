import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

const userSearchIndex = ({users, hide, play}) => {
  if(!users) {
    return null;
  }

  // debugger
  return (

    users.map(user => {
      let abbreviatedTitle = user.username;
      if (abbreviatedTitle && abbreviatedTitle.length > 14) {
        abbreviatedTitle = `${abbreviatedTitle.slice(0, 10)}...`;
      }


      return (
          <div className={`entity-index-item animated fadeIn`} id='speed-3' key={user.id}>
            <div className='entity-index-item-hide'
              onMouseOver={() => hide('show', user.id)}
              onMouseOut={() => hide('hide', user.id)}>

              <button className='playlist-ball-play-button-big big-scale'
                onClick={() => play(user.id)}
              >
                <i
                  className="far fa-play-circle fa-5x hidden"
                  id={`hidden-${user.id}`}
                  style={{color: '#ccc'}}>
                </i>
              </button>

              {/*<Link to={`/library/users/${user.id}`}>*/}
              <Link to={`search`}>
                <img className='entity-index-item-img index-img-big'
                     src={user.img_path} id={user.id}/>
              </Link>
            </div>

            <Link to={`/library/users/${user.id}`} className='entity-index-item-title'>
              <h3 className='bubble-title'>{abbreviatedTitle}</h3>
            </Link>

            {/*
            <h3 className='entity-index-item-followcount'>
              {Math.floor(Math.random()*10000)} Followers
            </h3>
            */}

          </div>
      );
    })
  );
};

export default userSearchIndex;
