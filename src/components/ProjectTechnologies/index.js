import React from "react";
import "./styles.scss";

const ProjectTechnology = ({ image, name }) => (
  <li className="project-tech__item">
    <img src={image} alt={name} />
  </li>
);

const ProjectTechnologies = ({data}) => (
  <section className="project-tech">
    <div className="project-tech__wrapper">
      <h2 className="project-tech__title">Technologies</h2>
      <ul className="project-tech__list">
        {data.map(tech => <ProjectTechnology key={tech.name} {...tech} />)}
      </ul>
    </div>
  </section>
);

export default ProjectTechnologies;
