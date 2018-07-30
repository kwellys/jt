import React from "react";
import "./styles.scss";

const FeaturedTech = ({ heading, sub, descr, image }) => (
  <section className="featured-tech">
    <div className="featured-tech__wrapper">
      {heading ? <h2 className="featured-tech__title">{heading}</h2> : null}
      {sub ? <h3 className="featured-tech__subtitle">{sub}</h3> : null}
      {descr ? <p className="featured-tech__descr">{descr}</p> : null}
      {image ? <div className="featured-tech__container"><img src={image} alt={heading} /></div> : null}
    </div>
  </section>
);

export default FeaturedTech;
