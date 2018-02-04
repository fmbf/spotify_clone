import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';



const mainPlayer = () => {
  return (

    <footer className="footer-all">

      <div className="footer-left">
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/36/42/af/3642afa1-26ec-ea06-8ecd-59b38ea5ed1f/UMG_cvrart_00602557684964_01_RGB72_1800x1800_17UMGIM97853.jpg/1200x630bb.jpg"/>
      </div>


      <div className="play-controls-main">

        <button className='main-BACK'>
          <i className="fas fa-step-backward fa-lg"></i>
        </button>

        <button className='main-PLAY'>
          <i className="fas fa-play"></i>
        </button>

        <button className='main-FORWARD'>
          <i className="fas fa-step-forward fa-lg"></i>
        </button>

      </div>

      <div className="footer-right">
        <p>Volume Controls</p>
      </div>

    </footer>

  );
};

export default mainPlayer;
