import React from "react";
import Ordered from "../Ordered";
import "./styles.scss";

const ReasonsItem = ({ image, num, heading, descr }) => (
  <li className="reasons__item">
    <article className="reasons__article">
      <div className="reasons__image-container">
        {image ? <img src={image} alt={heading} /> : null}
      </div>
      <Ordered num={num} heading={heading} descr={descr} />
    </article>
  </li>
);

const Reasons = ({ title, description, reasonsList }) => (
  <section className="reasons">
    <div className="reasons__wrapper">
      <h2 className="reasons__title">{title}</h2>
      <p className="reasons__sub">
        {description}
      </p>
      <ul className="reasons__list">
        {reasonsList ? reasonsList.map((item, index) => <ReasonsItem {...item} num={index}/>) : <li>It's empty!</li>}
      </ul>
    </div>
  </section>
);

export default Reasons;
