import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

import Title from '../../assets/images/titles/Industries.png'
import Enterprise from '../../assets/images/content/enterprise.jpg'
import Ecommerce from '../../assets/images/content/ecommerce.jpg'
import Healthcare from '../../assets/images/content/healthcare.jpg'
import Information from '../../assets/images/content/information.jpg'
import Data from '../../assets/images/content/data.jpg'

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
          <Link className="industries__article industries__article--reverse" to={'/healthcare/'}>
            <div className="industries__lines industries__lines--border-right"/>
            <div className="industries__container">
              <div className="industries__image-wrapper">
                <img className="industries__img" src={Healthcare} alt="Healthcare"/>
              </div>
              <header className="industries__header industries__header--blue">
                <h3 className="industries__link" to={'/healthcare/'}>Healthcare</h3>
              </header>
            </div>
          </Link>
          <Link className="industries__article industries__article--reverse" to={'/information/'}>
            <div className="industries__container">
              <div className="industries__image-wrapper">
                <img className="industries__img" src={Information} alt="Information"/>
              </div>
              <header className="industries__header industries__header--border-top">
                <h3 className="industries__link" to={'/information/'}>Information</h3>
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
          <Link className="industries__article industries__article--reverse" to={'/data/'}>
            <div className="industries__image-wrapper">
              <img className="industries__img" src={Data} alt="Fintech"/>
            </div>
            <div className="industries__container">
              <header className="industries__header industries__header--border-top">
                <h3 className="industries__link" to={'/data/'}>Data</h3>
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