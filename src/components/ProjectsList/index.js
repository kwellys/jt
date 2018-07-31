import React from "react";
import Link from 'gatsby-link'
import { kebabCase } from 'lodash';
import "./styles.scss";

const Project = ({ preview, title, smallDescr, category }) => (
  <li className="project-list__item">
    <Link to={`/projects/${kebabCase(title)}`} className="project-list__link">
      <span className="project-list__image-container">
        <img
          src={preview}
          alt={title}
        />
      </span>
      <span className="project-list__container">
        <h2 className="project-list__title">{title}</h2>
        <h3 className="project-list__type">{category}</h3>
        <p className="project-list__descr">{smallDescr}</p>
        <span className="project-list__more">
          See case
        </span>
      </span>
    </Link>
  </li>
);

const ProjectList = ({data}) => (
  <section className="project-list">
    <div className="project-list__wrapper">
      <ul className="project-list__list">
        {data.map(project => <Project key={project.title} {...project} />)}
      </ul>
    </div>
  </section>
);

export default ProjectList;
