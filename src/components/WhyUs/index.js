import React from "react";
import "./styles.scss";
import TitleImage from "../../assets/images/titles/Why_choose.png";

const WhyListItem = ({ image = '', title = 'Reason to work with us', descr = 'Description' }) => (
  <li className="why__item">
    <div className="why__icon">
      {image ? <img src={image} alt={title} /> : null}
    </div>
    <h3 className="why__heading">{title}</h3>
    <p className="why__descr">{descr}</p>
  </li>
);

const WhyUs = ({data}) => (
  <section className="why">
    <div className="why__wrapper">
      <h2 className="why__title">
        <img src={TitleImage} alt="Why choose us" />
        <span className="visually-hidden">Why choose us</span>
      </h2>
      <ul className="why__list">
        {data ? data.map(why => <WhyListItem key={why.title} {...why} />) : null}
      </ul>
    </div>
  </section>
);

export default WhyUs;
