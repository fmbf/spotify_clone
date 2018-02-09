import React from 'react';

// import timeFormat from 'time_format_util';

class MediaPlayer extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      muted: false,
      volume: .8,
      duration: 0,
      currentTime: 0,
    };

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
    this.repeatAudio = this.repeatAudio.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.setSlider = this.setSlider.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentTime: this.audio.currentTime,
      duration: this.audio.duration,
      muted: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.audio.currentSong !== this.props.audio.currentSong) {
      if (this.props.audio.playing) {
        this.audio.play();
      }
    }
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.duration > 0) {
      if (nextState.currentTime === nextState.duration) {
        this.setState({
          currentTime: 0
        });
      nextProps.nextSong();
      }
    }
  }

  setSlider() {
    return (this.state.currentTime / this.state.duration);
  }

  setEnd () {
    if (this.props.audio.repeat) {
      this.audio.currentTime = 0;
      // this.audio.play();
    } else {
      this.props.nextSong();
    }
  }

  parseTime(value) {
    let time;
    if (value) {
      time = Math.floor(value);
      if (time >= 60) {
        let minutes = Math.floor(time/60);
        let seconds = time % 60;
        if (seconds >= 10) {
          time = `0${minutes}:${seconds}`;
        } else {
          time = `0${minutes}:0${seconds}`;
        }
      } else {
        if (time >= 10) {
          time = `00:${time}`;
        } else {
          time = `00:0${time}`;
        }
      }
      return time;
    } else {
      return "00:00";
    }
  }

  playAudio() {
    this.audio.play();
    this.props.togglePlay();
  }

  pauseAudio() {
    this.audio.pause();
    this.props.togglePlay();
  }

  // muteAudio() {
  //   this.audio.muted = !this.audio.muted;
  //   this.props.toggleMute();
  // }

  muteAudio(){
    return () => {
      let volumeVal = 0;
      let oldVolumeVal = 0;
      if(this.state.muted){
        volumeVal = this.state.oldVolume;
      } else {
        oldVolumeVal = this.state.volume;
      }
      this.setState({ muted: !this.state.muted, volume: volumeVal, oldVolume: oldVolumeVal });
    };
  }

  repeatAudio() {
    this.props.toggleRepeat();
  }

  getCurrentTime () {
    this.setState({
      currentTime: this.audio.currentTime
    });
  }

  getDuration () {
    this.setState({
      duration: this.audio.duration
    });
  }

  // setVolume(){
  //   return e => {
  //     this.setState({ volume: parseFloat(e.target.value) });
  //   };
  // }

  setVolume(e){
    if (true) {
      let volume = e.target.value;
      this.audio.volume = volume;
      this.setState({volume});
    } else {
      return;
    }
  }

  render() {
    let songPath = '/';

    if (this.props.audio.currentSong) {
      songPath = this.props.audio.song_path;
    }

    let playButton;
    let pauseButton;

    if (this.props.audio.playing) {
      pauseButton =
        <div className='main-ctrls main-PLAY' id="button-pause" onClick={this.pauseAudio}>
          <i className="fas fa-pause fa-sm"></i>
        </div>;
      playButton = null;
    } else {
      playButton =
      <div className='main-ctrls main-PLAY' onClick={this.playAudio}>
        {/*<i className="fas fa-play"></i>*/}
        <i className="fas fa-play fa-sm"></i>
      </div>;
      pauseButton = null;
    }

    let muteOn;
    let muteOff;

    if (this.props.audio.mute) {
      muteOff =
      <div id="button-mute-off" onClick={this.muteAudio}>
        <i className="fas fa-volume-off mute"></i>
      </div>;
      muteOn = null;
    } else {
      muteOn =
      <div id="button-mute-on" onClick={this.muteAudio}>
        <i className="fas fa-volume-up volume"></i>
      </div>;
      muteOff = null;
    }

    let toggleOn;
    let toggleOff;

    if (this.props.audio.repeat) {
      toggleOff =
      <button className='main-ctrls main-LOOP' id="button-repeat-off" onClick={this.repeatAudio}>
        <i className="fas fa-sync"></i>
      </button>;
      toggleOn = null;
    } else {
      toggleOn =
      <button className='main-ctrls main-LOOP' id="button-repeat-on" onClick={this.repeatAudio}>
        <i className="fas fa-sync"></i>
      </button>;
      toggleOff = null;
    }

    let trackImage;
    let albumPic = "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/36/42/af/3642afa1-26ec-ea06-8ecd-59b38ea5ed1f/UMG_cvrart_00602557684964_01_RGB72_1800x1800_17UMGIM97853.jpg/1200x630bb.jpg";

    if (this.props.audio.img_path) {
      trackImage =
      <img
        id='preview-track-image'
        src={this.props.audio.img_path}
      />;
    } else {
      trackImage = <img/>;
    }

    let sliderStyle = {
      width: `${this.setSlider() * 100}%`
    };

    let volumeStyle = {
      width: `${this.state.volume * 10}%`
    };





    return (
      <div id="audioplayer" className="footer-all">

        {/*----------------------------------------*/}
        <audio
          ref={(audio) => { this.audio = audio; }}
          src={songPath}
          onCanPlayThrough={this.getDuration}
          onTimeUpdate={this.getCurrentTime}
          onEnded={this.setEnd}
          >
        </audio>
        {/*----------------------------------------*/}

        <div className="footer-left">
          {trackImage}
            <h3 id='footplayer-song-title'>
              {this.props.audio.title}
            </h3>
        </div>



        <div className="play-controls-main">

          <div className="play-controls-main-top">

            <button className='main-ctrls main-SHUFFLE' onClick={this.props.nextSong}>
              <i className="fas fa-random"></i>
            </button>

            <button className='main-ctrls main-BACK' onClick={this.props.nextSong}>
              <i className="fas fa-step-backward fa-lg"></i>
            </button>


            {/*-----------PLAY/PAUSE------------------*/}
              {playButton}
              {pauseButton}
            {/*-----------PLAY/PAUSE------------------*/}



              <button className='main-ctrls main-FORWARD' onClick={this.props.nextSong}>
                <i className="fas fa-step-forward fa-lg"></i>
              </button>


              {toggleOn}
              {toggleOff}

          </div>


        <div className="play-controls-main-bottom">

          <h3 id="time-played">
            {this.parseTime(this.state.currentTime)}
          </h3>

            <div id="playhead-slider">
              <div style={sliderStyle} id="playhead-slider-currentTime"></div>
              <input id="playhead-slider-bar" type="range" min={0} max={1} step="any" value={this.setSlider()}></input>
            </div>


            <h3 id="time-total">
              {this.parseTime(this.state.duration)}
            </h3>

          </div>
        </div>


        <div className="footer-right">

            <div style={volumeStyle} id="currentVolume"></div>
              <div id="mute-button">
                {muteOn}
                {muteOff}
              </div>
            <input id="volume-bar" onChange={this.setVolume} type="range" min={0} max={1} step="any" value={this.state.volume}></input>


        </div>

      </div>
    );
  }
}

export default MediaPlayer;
