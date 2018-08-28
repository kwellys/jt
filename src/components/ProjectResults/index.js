import React from "react";
import "./styles.scss";

const SmallResult = ({title, descr, icon}) => (
  <article className="result__small">
    {icon ? <div className="result__icon"><img src={icon} alt={title}/></div> : null}
    <div className="result__container">
      {title ? <h3 className="result__heading">{title}</h3> : null}
      <ul className="results__list">
        {descr ? descr.split("\n").map(item => <li key={item.length + item[0]} className="results__item">{item}</li>) : null}
      </ul>
    </div>
  </article>
);

const ProjectResults = ({data}) => (
  <section className="results">
    <div className="results__wrapper">
      {data.title ? <h2 className="results__title">{data.title}</h2> : <h2 className="results__title">Enter title</h2>}
      <div className="results__columns">
        <div className="results__column">
          {data.descr ? data.descr.split("\n").map(item => <p key={item.length + item[0]} className="results__descr">{item}</p>) : null}
        </div>
        <div className="results__column">
          {data.results ? data.results.map(result => <SmallResult key={result.title} {...result} />) : null}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectResults;
