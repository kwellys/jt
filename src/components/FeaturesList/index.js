import React from "react";
import classnames from "classnames";
import "./styles.scss";

const FeaturesItem = ({ img, title, descr }) => (
  <li className="features__item">
    {img ? <div className="features__icon"><img src={img} alt={title} /></div> : null}
    {title ? <h3 className="features__heading">{title}</h3> : null}
    {descr ? <p className="features__details">{descr}</p> : null}
  </li>
);

const FeaturesList = ({ data, isInnerPage }) => {
  let featuresSectionName = classnames("features", {
    "features--inner": isInnerPage
  });
  return (
    <section className={featuresSectionName}>
      <div className="features__wrapper">
        {data.title ? <h2 className="features__title">{data.title}</h2> : null}
        {data.sub ? <h3 className="features__subtitle">{data.sub}</h3> : null}
        {data.descr ? <p className="features__descr">{data.descr}</p> : null}
        <ul className="features__list">
          {data.featuresList ? data.featuresList.map(feature => (
            <FeaturesItem key={`feature_${feature.title}`} {...feature}/>
          )) : null}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesList;
