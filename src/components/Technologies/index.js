import React from "react";
import "./styles.scss";
import Title from "../../assets/images/titles/Tech.png";

const TechnologiesArticle = ({ title, list }) => (
  <div className="technologies__article">
    <h3 className="technologies__heading">{title}</h3>
    <ul className="technologies__list">
      {list ? list.map(item => (
        <li key={`tech_${item.name}`} className="technologies__item">
          <img src={item.image} alt={item.name}/>
        </li>
      )) : null}
    </ul>
  </div>
);

const Technologies = ({data}) => (
  <section id='technologies' className="technologies">
    <div className="technologies__wrapper">
      <h2 className="technologies__title">
        <img src={Title} alt="Technologies" />
        <span className="visually-hidden">Technologies</span>
      </h2>
      <div className="technologies__container">
        {data.map(article => <TechnologiesArticle key={`tech_${article.title.replace(/\s+/g, '')}`} {...article} />)}
      </div>
    </div>
  </section>
);

export default Technologies;
