import React from "react";
import Form from "../Form";
import "./styles.scss";
import ThankYou from "../../assets/images/titles/thank-you.png";

const data = [
  {
    name: "name",
    placeholder: "Please enter your name"
  },
  {
    name: "email",
    placeholder: "Please enter your email",
    type: "email"
  },
  {
    name: "message",
    placeholder: "Please enter your message",
    type: "textarea"
  }
];

const SuccessMessage = () => (
  <div className="modal__success">
    <img src={ThankYou} alt="Thank You!"/>
    <p className="modal__descr">You will be returned back in 5 seconds</p>
  </div>
);

class Modal extends React.Component {
  state = {
    isSubmitted: false,
  };

  handleSubmit = () => {
    console.log('submitted')

    setTimeout(() => this.setState(prevState => {
      return { isSubmitted: !prevState.isSubmitted };
    }), 1000);
    setTimeout(() => this.props.handleModal, 5000)
  };

  render() {
    const { handleModal } = this.props;
    return (
      <div className="modal">
        <div className="overlay"/>
        <div className="modal__wrapper">
          <button onClick={handleModal} className="modal__close-btn">
            <span className="visually-hidden">Close order form</span>
          </button>
          {this.state.isSubmitted ? null : (
            <h2 className="modal__title">Let's get in touch</h2>
          )}
          {this.state.isSubmitted ? null : (
            <Form
              fields={data}
              formClass="modal-window__form"
              clickHandler={this.handleSubmit}
            />
          )}

          {this.state.isSubmitted ? <SuccessMessage/> : null}
        </div>
      </div>
    );
  }
}

export default Modal;
