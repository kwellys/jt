import React from 'react'
import './styles.scss'

const AboutUsBrief = ({title, descr, image}) => (
  <section className="about-us">
    <div className="about-us__wrapper">
      <h2 className="about-us__title">{title}</h2>
      <p className="about-us__descr">{descr}</p>
      <div className="about-us__image-container">
        <img src={image} alt="Our office"/>
      </div>
    </div>
  </section>
);

export default AboutUsBrief