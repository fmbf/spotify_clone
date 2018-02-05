import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';



class welcomeComponent extends React.Component {

  render() {
    return (
      <div>
        <div className="splash-main">
          {/*<img src={}></img>*/}
          <div className="splash-main-text">

            <h1 className='welcome-h1'>Music for everyone.</h1>

            <h3>A clone by<strong className='splash-fmbf'>FMBF</strong>|
              <a href="https://github.com/fmbf"><i className="fab fa-github"></i></a>
            </h3>

            <div className="button-container">
              <Link to={"/login"}>
                <button type="button"
                        name="button"
                        className='button-green'>
                  LOG IN
                </button>
              </Link>


              <Link to={"/signup"}>
                <button type="button"
                        name="button"
                        className='button-mono'>
                  SIGN UP
                </button>
              </Link>
            </div>

          </div>
        </div>


        <div>
          <div className="albums-grid">
            <img className="speed-1 animated fadeInUp"
                 id='speed-1'
                 src="http://payload170.cargocollective.com/1/12/391611/5705300/10271482_711133358945257_7454391078460532252_n.jpg"/>
            <img className="speed-2 animated fadeInUp"
                 id='speed-2'
                 src="https://charts-static.billboard.com/img/1840/12/drake-zwl.jpg"/>
            <img className="speed-3 animated fadeInUp"
                 id='speed-3'
                 src="https://upload.wikimedia.org/wikipedia/en/2/20/Dua_Lipa_%28album%29.png"/>
          </div>
        </div>


      </div>
    );
  }
}


export default welcomeComponent;
