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
              <h1 className='app-name'>Spotify</h1>
              <h1 className='mini'> | mini </h1>
              <i className="fab fa-spotify fa-xs"></i>
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




        <footer className='animated fadeIn'>
          <i className="fab fa-spotify fa-2x welcome-header-logo"></i>
          <a href="https://github.com/fmbf" target="_blank" className="splash-header-link">
            <h1 className="splash-header-item">GitHub</h1>
          </a>
          <a href="https://www.linkedin.com/in/francesco-mbf/" target="_blank" className="splash-header-link">
            <h1 className="splash-header-item">LinkedIn</h1>
          </a>
        </footer>





        <div id='welcome-paragraphs-div'>
          <span>
            <h1>What’s playing?</h1>

            <h2>MUSIC</h2>
            <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>

            <h2>PLAYLISTS</h2>
            <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>

            <h2>NEW RELEASES</h2>
            <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
            <br/>

          </span>

          <div id='welcome-paragraphs-pic1'>
            <img className="speed-3 animated fadeInUp floatInnerPic"
                 id='speed-6'
                 src="http://www.edmtunes.com/wp-content/uploads/2015/12/spotify-kygo-breakout-artist-2015_zpsksmvya0u-696x696.png"/>
          </div>
        </div>

        <center>
          <div>
              <Link to={"/login"}>
                <button type="button"
                        name="button"
                        className='button-mono'>
                  GET STARTED
                </button>
              </Link>
          </div>
        </center>
        <br/>
        <br/>

        <div className='black-footer-splash'>
          <i className="fab fa-spotify welcome-header-logo"></i>
          <a href="https://github.com/fmbf" target="_blank" className="splash-header-link">
            <h1 className="splash-header-item">GitHub</h1>
          </a>
          <a href="https://www.linkedin.com/in/francesco-mbf/" target="_blank" className="splash-header-link">
            <h1 className="splash-header-item">LinkedIn</h1>
          </a>
        </div>
      </div>
    );
  }
}


export default welcomeComponent;
