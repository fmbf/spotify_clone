import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const welcomeComponent = () => (
  <div>


    <div className="splash-main">
      <div className="splash-main-text">

        <h1>Music for everyone.</h1>

        <h3>A clone by
          <strong>
            <a href="https://github.com/fmbf"> FMBF </a>
          </strong>  |
          <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
        </h3>

        <div className="profile-button-box">
          <Link to={"/login"}>
            <button type="button"
                    name="button"
                    className='header-button-play'>
              LOG IN
            </button>
          </Link>


          <Link to={"/signup"}>
            <button type="button"
                    name="button"
                    className='header-button-save'>
              SIGN UP
            </button>
          </Link>
        </div>

      </div>
    </div>


    <div className="main-window main">
      <div className="albums-grid">
        <img className="animated fadeInUp"
          id='pic-1'
             src="http://payload170.cargocollective.com/1/12/391611/5705300/10271482_711133358945257_7454391078460532252_n.jpg"/>
           <img className="animated fadeInUp"
             id='pic-2'
             src="https://charts-static.billboard.com/img/1840/12/drake-zwl.jpg"/>
           <img className="animated fadeInUp"
             id='pic-3'
          src="https://upload.wikimedia.org/wikipedia/en/2/20/Dua_Lipa_%28album%29.png"/>
      </div>
    </div>


  </div>
);

export default welcomeComponent;
