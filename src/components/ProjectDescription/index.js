import React from "react";
import "./styles.scss";

const ProjectDescriptionColumn = ({ column }) => (
  <div className="project-descr__column">
    {column.split("\n").map(item => <p key={item} className="project-descr__descr">{item}</p>)}
  </div>
);

const ProjectDescription = ({ descr, title }) => (
  <section className="project-descr">
    <div className="project-descr__wrapper">
      <h2 className="project-descr__title">{title}</h2>
      <div className="project-descr__columns">
        <div className="project-descr__column">
          <p className="project-descr__descr">{descr}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectDescription;
