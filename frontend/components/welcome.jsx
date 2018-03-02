import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';



class welcomeComponent extends React.Component {

  render() {
    return (
      <div>
        <div className="splash-main">
          {/*<img src={}></img>*/}
          <div className="splash-main-text animated fadeIn" id='speed-6'>
            <strong>
              <h1 className='welcome-h1'>Music for everyone.</h1>
            </strong>

            <h3>A clone by<strong className='splash-fmbf'>FMBF</strong>|
              <a href="https://github.com/fmbf" target="_blank"><i className="fab fa-github fa-lg"></i></a>
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
                        id='welcome-mono'
                        className='button-mono'>
                  SIGN UP
                </button>
              </Link>
            </div>

          </div>
        </div>


        <div>
          <div className="albums-grid">
            <img className="speed-1 animated fadeInUp floatInnerPic"
                 id='speed-4'
                 src={ window.staticImages.havana }/>
            <img className="speed-2 animated fadeInUp floatInnerPic"
                 id='speed-5'
                 src='https://www.billboard.com/files/styles/900_wide/public/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000.jpg'/>
            <img className="speed-3 animated fadeInUp floatInnerPic"
                 id='speed-6'
                 src="https://upload.wikimedia.org/wikipedia/en/a/a5/MajorLazerPeaceIstheMission.png"/>
          </div>
        </div>

        <div id='orange-container'>
          <img src={ window.staticImages.orange_abstract } id='orange_abstract'/>
        </div>


      </div>
    );
  }
}


export default welcomeComponent;
