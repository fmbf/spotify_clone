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
    transform             : 'translate(-50%, -50%)'
  }
};

class PlaylistModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ``,
      image: '',
      description: '',
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
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const playlist = this.state;
    this.closeModal();
    this.props.processForm(playlist);
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
          contentLabel="Example Modal"
        >

        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-form-inner-box">

            <div className='form-type-title'>

              <h2 className='form-title-text'>{this.props.formType}</h2>
            </div>

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
