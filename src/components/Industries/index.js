import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

import Title from '../../assets/images/titles/Industries.png'
import Enterprise from '../../assets/images/content/enterprise.jpg'
import Blockchain from '../../assets/images/content/blockchain.jpg'
import Booking from '../../assets/images/content/booking.jpg'
import Ecommerce from '../../assets/images/content/ecommerce.jpg'
import Fintech from '../../assets/images/content/fintech.jpg'

const Industries = () => (
  <section id='industries' className="industries">
    <div className="industries__wrapper">
      <h2 className="industries__title">
        <img src={Title} alt="Industries"/>
        <span className="visually-hidden">Industries</span>
      </h2>
      <div className="industries__column-wrapper">
        <div className="industries__column">
          <Link className="industries__article" to={'/enterprise-solution/'}>
            <header className="industries__header industries__header--blue">
              <h3 className="industries__link" to={'/enterprise-solution/'}>Enterprise solution</h3>
            </header>
            <div className="industries__image-wrapper">
              <img className="industries__img" src={Enterprise} alt="Enterprise solution"/>
            </div>
          </Link>
        </div>
        <div className="industries__column">
          <Link className="industries__article industries__article--reverse" to={'/blockchain/'}>
            <div className="industries__lines industries__lines--border-right"/>
            <div className="industries__container">
              <div className="industries__image-wrapper">
                <img className="industries__img" src={Blockchain} alt="Blockchain"/>
              </div>
              <header className="industries__header industries__header--blue">
                <h3 className="industries__link" to={'/blockchain/'}>Blockchain</h3>
              </header>
            </div>
          </Link>
          <Link className="industries__article industries__article--reverse" to={'/booking/'}>
            <div className="industries__container">
              <div className="industries__image-wrapper">
                <img className="industries__img" src={Booking} alt="Booking&amp;event platforms"/>
              </div>
              <header className="industries__header industries__header--border-top">
                <h3 className="industries__link" to={'/booking/'}>Booking&amp;<br/>event platforms</h3>
              </header>
            </div>
            <div className="industries__lines industries__lines--border-left"/>
          </Link>
        </div>
        <div className="industries__column">
          <Link className="industries__article" to={'/e-commerce/'}>
            <header className="industries__header industries__header--border-bottom">
              <h3 className="industries__link" to={'/e-commerce/'}>E-commerce</h3>
            </header>
            <div className="industries__image-wrapper">
              <img className="industries__img" src={Ecommerce} alt="E-commerce"/>
            </div>
          </Link>
          <Link className="industries__article industries__article--reverse" to={'/fintech/'}>
            <div className="industries__image-wrapper">
              <img className="industries__img" src={Fintech} alt="Fintech"/>
            </div>
            <div className="industries__container">
              <header className="industries__header industries__header--border-top">
                <h3 className="industries__link" to={'/fintech/'}>Fintech</h3>
              </header>
              <div className="industries__lines industries__lines--border-left industries__lines--border-top"/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Industries