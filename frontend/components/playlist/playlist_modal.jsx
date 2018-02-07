import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '43%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    // backgroundColor       : 'rgb(22, 30, 40)',
    // color                 : '#fff'
    zIndex                : '200',
  },
  overlay : {
    backgroundColor       : 'rgba(40, 40, 40, 0.75)',
    zIndex                : '199',
  }
};

class PlaylistModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.playlist.title,
      image: '',
      description: props.playlist.description,
      /*modalIsOpen: true*/
      modalIsOpen: props.open

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.history = this.props.history;

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentWillReceiveProps(newProps) {

    if (newProps) {
      this.setState({modalIsOpen: newProps.open});
    }

    // Clear Errors
    if (this.props.location.pathname !== newProps.location.pathname) {
      if (this.props.errors && this.props.errors.length){
        this.props.clearErrors();
      }
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillUpdate() {

  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    /*this.subtitle.style.color = '#f00';*/
  }

  closeModal() {
    this.setState({modalIsOpen: false}, this.props.modalToggle);
    this.props.clearErrors();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const playlist = this.state;
    this.props.processForm(playlist).then(() => this.closeModal());
  }

  renderErrors() {
    if (this.props.errors && this.props.errors.length){
      return(
        <div className='playlist-errors-div animated fadeInUp'>
          <h3>
            <ul className='errors-ul'>
              {
                this.props.errors.map((error, i) => (
                <li key={`error-${i}`} className='error-display'>
                  {error}
                </li>
                ))
              }
            </ul>
          </h3>
        </div>
      );
    }

    return null;
  }



  render() {

    let buttonText = 'Create';
    if(this.props.formType === 'update') {
      buttonText = 'Save';
    }

    return (

      <div className="login-form-container">

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >

        <form onSubmit={this.handleSubmit} className="login-form animated fadeIn">
          <div className="playlist-form-inner-box">

            <div className='form-type-title'>
              <h2 className='form-title-text'>{this.props.formType} playlist</h2>
            </div>

            {this.renderErrors()}


            <br/>

            <input type="text"
              placeholder="New Playlist"
              value={this.state.title}
              onChange={this.update('title')}
              className="login-input"
            />


            <br/>


              <textarea
                placeholder="Give your playlist a catchy description."
                value={this.state.description}
                onChange={this.update('description')}
                className="login-input playlist-description"
                id='playlist-description'
              />


            <br/>

            <div className='button-container'>
              <button className="button-green" type="submit">
                {buttonText.toUpperCase()}
              </button>

              <button className="demo-user button-mono" onClick={this.closeModal}>
                CANCEL
              </button>
            </div>



          </div>
        </form>
        </Modal>
      </div>
    );
  }
}

export default PlaylistModal;
