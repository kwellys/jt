import React, {Fragment} from "react";
import {kebabCase} from "lodash";
import Helmet from "react-helmet";
import Promo from "../components/Promo";
import ProjectSlider from "../components/ProjectSlider";
import ProjectTestimonial from "../components/ProjectTestimonial";
import ProjectTechnologies from "../components/ProjectTechnologies";
import ProjectDescription from "../components/ProjectDescription";
import Start from "../components/Start";
import Stages from "../components/Stages";
import ProjectResults from "../components/ProjectResults";
import LatestProjects from "../components/LatestProjects";

export const ProjectTemplate = ({
                                  promo,
                                  title,
                                  goals,
                                  slider,
                                  testimonial,
                                  technologies,
                                  projectResults,
                                  stages,
                                  solutions,
                                  latestProjects,
                                  handleModal
                                }) => {
  return (
    <Fragment>
      <Helmet title={`${title} | Project`}/>
      {promo.length || title ? <Promo heading={title} {...promo} handleModal={handleModal}/> : null}
      {goals.length || goals ? <ProjectDescription {...goals}/> : null}
      {slider.length || slider ? <ProjectSlider data={slider}/> : null}
      {solutions.length || solutions ? <ProjectDescription {...solutions}/> : null}
      {stages.length && stages ? <Stages data={stages}/> : null}
      {technologies.length || technologies ? <ProjectTechnologies data={technologies}/> : null}
      {projectResults.length || projectResults ? <ProjectResults data={projectResults}/> : null}
      {testimonial.length || testimonial ? <ProjectTestimonial {...testimonial}/> : null}
      {typeof latestProjects !== "undefined" && latestProjects.length !== 0 ? <LatestProjects textTitle isWidget data={latestProjects} /> : null}
      <Start/>
    </Fragment>
  );
};

const Project = ({data, handleModal}) => {
  const project = data.projects.frontmatter;
  const latestProjectsData = data.latestProjects.edges;

  const allPages = latestProjectsData.map(item => item.node.frontmatter);
  const filter = () =>  allPages.filter(item => item.title !== project.title);
  const latestProjects = filter();

  return (
    <ProjectTemplate
      title={project.title}
      promo={project.promo}
      goals={project.goals}
      slider={project.slider}
      testimonial={project.testimonial}
      technologies={project.technologies}
      projectResults={project.projectResults}
      stages={project.stages}
      solutions={project.solutions}
      latestProjects={latestProjects}
      handleModal={handleModal}
    />
  );
};

export default Project;

export const projectQuery = graphql`
  query ProjectByID($id: String!) {
    projects: markdownRemark(
    id: { eq: $id }
    ) {
      frontmatter {
        title
        promo {
          sub
          link
        }
        goals {
          title
          descr {
            leftCol
            rightCol
          }
        }
        slider {
          img
        }
        testimonial {
          description
          person {
            image
            name
            occupation
          }
        }
        technologies {
          image
          name
        }
        projectResults {
          descr
          results {
            title
            descr
            icon
          }
        }
        solutions {
          title
          descr {
            leftCol
            rightCol
          }
        }
        stages {
          stageDetails
          isComplete
        }
      }
    }
    latestProjects: allMarkdownRemark (
      filter: { frontmatter: { templateKey: { eq: "project" } }},
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 3
     ) {
      edges {
        node {
          frontmatter {
            templateKey
            title
            slider {
              img
            }
          }
        }
      }
    }
  }
`;
