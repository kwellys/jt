import React, { Fragment } from "react";
import { kebabCase } from "lodash";
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
  title,
  pageTitle,
  metaTitle,
  metaDescr,
  promo,
  goals,
  slider,
  testimonial,
  technologies,
  projectResults,
  solutions,
  latestProjects,
  handleModal
}) => {
  return (
    <Fragment>
      <Helmet>
        <title>{`${pageTitle} | Project`}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescr} />
      </Helmet>
      {promo.length || title ? (
        <Promo heading={title} {...promo} handleModal={handleModal} />
      ) : null}
      {goals.length || goals ? <ProjectDescription {...goals} /> : null}
      {slider.length || slider ? <ProjectSlider data={slider} /> : null}
      {solutions.length || solutions ? (
        <ProjectDescription {...solutions} />
      ) : null}
      {technologies.length || technologies ? (
        <ProjectTechnologies data={technologies} />
      ) : null}
      {projectResults.length || projectResults ? (
        <ProjectResults data={projectResults} />
      ) : null}
      {testimonial.length || testimonial ? (
        <ProjectTestimonial {...testimonial} />
      ) : null}
      {typeof latestProjects !== "undefined" && latestProjects.length !== 0 ? (
        <LatestProjects textTitle isWidget data={latestProjects} />
      ) : null}
      <Start />
    </Fragment>
  );
};

const Project = ({ data, handleModal }) => {
  const project = data.projects.frontmatter;
  const latestProjectsData = data.latestProjects.edges
    .map(item => item.node)
    .filter(item => item.frontmatter.title !== project.title)
    .slice(0, 2);

  return (
    <ProjectTemplate
      pageTitle={project.meta.pageTitle}
      metaTitle={project.meta.metaTitle}
      metaDescr={project.meta.metaDescr}
      title={project.title}
      promo={project.promo}
      goals={project.goals}
      slider={project.slider}
      testimonial={project.testimonial}
      technologies={project.technologies}
      projectResults={project.projectResults}
      solutions={project.solutions}
      latestProjects={latestProjectsData}
      handleModal={handleModal}
    />
  );
};

export default Project;

export const projectQuery = graphql`
  query ProjectByID($id: String!) {
    projects: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta {
          pageTitle
          metaTitle
          metaDescr
        }
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
      }
    }
    latestProjects: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            preview
          }
        }
      }
    }
  }
`;
