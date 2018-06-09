import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
    state = {
      modal: false
    }

  handleClick = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  }

  render() {
    return (
      <div className="modal-container">
       <button type="button" name="button" className="modal-btn">
         <i className="material-icons md-14" onClick={this.handleClick}>
           info_outline</i></button>
       <dialog className="modal-about" open={this.state.modal}>
         <button type="button" name="button" className="modal-cancel">
           <i className="material-icons sm-12" onClick={this.handleClick}>
             clear</i></button>
             
         <h4 className="modal-title">Calculator</h4>
         <p className="modal-text">This is an Advanced Front End Developer
           project from the FreeCodeCamp curriculum. The user stories to be
           completed are:</p>
         <ul className="user-stories">
           <li className="story">I can add, subtract, multiply and divide two 
           numbers.</li>
           <li className="story"> I can clear the input field with a clear button.</li>
           <li className="story">I can keep chaining mathematical operations 
           together until I hit the equal button, and the calculator will tell 
           me the correct output.</li>
         </ul>
         <p className="modal-text copy">This project was coded in React using
           Create-React-App.
           The code can be seen on <a href="https://github.com/D-Pagey/calculator"
           target="_blank" rel="noopener noreferrer" className="link">
           Github</a>.</p>
       </dialog>
     </div>
   )
  }
}

export default Modal;
