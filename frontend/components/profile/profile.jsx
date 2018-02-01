import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class profile extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.currentUser = this.props.currentUser;
  }


  logout() {
    this.props.logout();
  }

  render(){

    return (

      <div>

        <div className="sidenav">
          <a href="#">Search</a>
          <h3>------------------</h3>
          <a href="#">Home</a>
          <h3>------------------</h3>
          <a href="#">Songs</a>
          <a href="#">Artists</a>
          <a href="#">Albums</a>
          <h3>------------------</h3>
          <a href="#">TGIF</a>
          <a href="#">Workout Playlist</a>
          <a href="#">House Party</a>

        </div>

        <div className="main-window main">
          <header className="profile-header">
            <img src="https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/36/42/af/3642afa1-26ec-ea06-8ecd-59b38ea5ed1f/UMG_cvrart_00602557684964_01_RGB72_1800x1800_17UMGIM97853.jpg/1200x630bb.jpg"/>

            <div className="profile-info">

              <h3>ALBUM</h3>
              <h1>Chapter One</h1>
              <h3>by <strong><a href="#">Lemaitre</a></strong>  |  14 songs, 55min </h3>

              <div className="profile-button-box">
                <button type="button" name="button" className='header-button-play'>PLAY</button>
                <button type="button" name="button" className='header-button-save'>SAVE</button>
                <button type="button" name="button">...</button>
              </div>

            </div>

            <div className='user-session-nav'>
              <img className='current-user-avatar' src={this.currentUser.img_path}/>
              <h3>{this.currentUser.username}</h3>
              <button onClick={this.logout} className='button-mono'>LOG OUT</button>
            </div>
          </header>

          <ol className='song-list'>
            <li><a href="#">Cut To Black | 4:49</a></li>
            <li><a href="#">Closer | 4:49</a></li>
            <li><a href="#">Continuum | 4:49</a></li>
            <li><a href="#">Higher | 4:49</a></li>
            <li><a href="#">Blue Shift | 4:49</a></li>
            <li><a href="#">Stepping Stone | 4:49</a></li>
            <li><a href="#">Time To Realize | 4:49</a></li>
            <li><a href="#">We Got U | 4:49</a></li>
            <li><a href="#">Last Night On Earth | 4:49</a></li>
            <li><a href="#">Playing To Lose | 4:49</a></li>

            <li><a href="#">Cut To Black | 4:49</a></li>
            <li><a href="#">Closer | 4:49</a></li>
            <li><a href="#">Continuum | 4:49</a></li>
            <li><a href="#">Higher | 4:49</a></li>
          </ol>
        </div>

        <footer>
          <div className="footer-all">

            <div className="footer-left">
              <img src="https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/36/42/af/3642afa1-26ec-ea06-8ecd-59b38ea5ed1f/UMG_cvrart_00602557684964_01_RGB72_1800x1800_17UMGIM97853.jpg/1200x630bb.jpg"/>
            </div>


            <div className="play-controls">
              <p>Playback Controls</p>
            </div>

            <div className="footer-right">
              <p>Volume Controls</p>

            </div>

          </div>
        </footer>




      </div>
    );

  }


}

export default withRouter(profile);
