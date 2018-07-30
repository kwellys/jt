import React from "react";
import "./styles.scss";
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
  }
];

const Touch = () => (
  <section className="touch">
    <div className="touch__wrapper">
      <div className="touch__heading">
        <h2 className="touch__title">Lets get in touch</h2>
        <p className="touch__subtitle">
          Leave your email address to schedule an individual free consultation
        </p>
      </div>
      <Form netlify fields={data} formClass="touch__form" />
    </div>
  </section>
);

export default Touch;
