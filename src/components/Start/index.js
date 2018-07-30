import React from "react";
import "./styles.scss";
import Title from "../../assets/images/titles/rocket.png";
import Form from "../Form";

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

const Start = () => (
  <section className="start">
    <div className="start__wrapper">
      <div className="start__title">
        <img src={Title} alt="Start Like A Rocket" />
        <span className="visually-hidden">Get ready for launch</span>
        <p className="start__subtitle">
          Contact us today and get<br/> a free consultation on your project
        </p>
      </div>
      <Form fields={data} formClass="start__form" />
    </div>
  </section>
);

export default Start;
