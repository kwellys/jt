import React from "react";
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'
import slugify from 'slugify';
import "./styles.scss";
import Title from "../../assets/images/titles/Projects.png";

const Project = ({slider, title}) => (
  <Link to={`/projects/${slugify(title, {lower: true})}`} className="projects__article">
    <img src={slider[0].img} alt={title}/>
    <div className="projects__descr">
      <h3 className="projects__heading">{title}</h3>
      <span className="projects__show">Show</span>
    </div>
  </Link>
);

const LatestProjects = ({
                          isWidget,
                          textTitle,
                          data
                        }) => {
  return (
    <section className={isWidget ? "projects projects--two" : "projects"}>
      <div className="projects__wrapper">
        {!textTitle ? (
          <h2 className="projects__title">
            <img src={Title} alt="Latest Projects"/>
            <span className="visually-hidden">Latest Projects</span>
          </h2>
        ) : (
          <h2 className="projects__title">Latest Projects</h2>
        )}
        <div className="projects__container">
          <div className="projects__column">
            <Project {...data[0]}/>
          </div>
          <div className="projects__column">
            {data.slice(1, 3).map(project => <Project key={project.title} {...project} />)}
          </div>
        </div>
        {!isWidget ?
          <Link className="projects__link" to="/projects">
            See all our projects
          </Link> :
          null
        }
      </div>
    </section>
  );
};

LatestProjects.defaultProps = {
  isWidget: false,
  textTitle: '',
  data: [{
    title: 'Project Title',
    slider: [{
      img: null
    }]
  }]
};

export default LatestProjects;
