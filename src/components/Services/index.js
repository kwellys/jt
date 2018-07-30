import React from "react";
import Link from 'gatsby-link'
import "./styles.scss";
import Title from "../../assets/images/titles/Services.png";

const ServicesItem = ({ img = '', title = 'None provided', link, descr }) => (
  <li className="services__item">
    <Link to={'services/' + link} className="services__icon">
      <img src={img} alt={title} />
    </Link>
    <h3 className="services__heading">
      <Link to={'services/' + link} className="services__link">
        {title}
      </Link>
    </h3>
    {descr ? descr.map(elem => <p key={elem.service} className="services__descr">{elem.service}</p>) : null}
  </li>
);

const ServicesList = ({data}) => (
  <section className="services">
    <div className="services__wrapper">
      <h3 className="services__title">
        <img src={Title} alt="Our Services" />
        <span className="visually-hidden">Our Services</span>
      </h3>
      <ul className="services__list">
        {data.map(elem => (
          <ServicesItem key={elem.title} {...elem} />
        ))}
      </ul>
    </div>
  </section>
);

export default ServicesList;
