import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Promo from "../components/Promo";
import FeaturesList from "../components/FeaturesList";
import FeaturedTech from "../components/FeaturedTech";
import Start from "../components/Start";
import ProjectTechnologies from "../components/ProjectTechnologies";
import LatestProjects from "../components/LatestProjects";

export const ServiceTemplate = ({
  title,
  promo,
  features,
  featuredTech,
  technologies,
  latestProjects,
  handleModal
}) => {
  return (
    <Fragment>
      <Helmet title={`${title} | Service`} />
      {promo.length !== 0 || promo ? (
        <Promo
          bigLogo={promo.image}
          sub={promo.sub}
          handleModal={handleModal}
        />
      ) : null}
      {features.length !== 0 || features ? (
        <FeaturesList data={features} isInnerPage />
      ) : null}
      {featuredTech.length !== 0 || featuredTech ? (
        <FeaturedTech {...featuredTech} />
      ) : null}
      {technologies.length !== 0 || technologies ? (
        <ProjectTechnologies data={technologies} />
      ) : null}
      {typeof latestProjects !== "undefined" ? (
        <LatestProjects textTitle isWidget data={latestProjects} />
      ) : null}
      <Start />
    </Fragment>
  );
};

const Service = ({ data, handleModal }) => {
  const service = data.service.frontmatter;
  const latestProjectsData = data.latestProjects.edges;

  const allProjects = latestProjectsData.map(item => item.node.frontmatter);

  return (
    <ServiceTemplate
      title={service.title}
      promo={service.promo}
      features={service.features}
      featuredTech={service.featuredTech}
      technologies={service.technologies}
      latestProjects={allProjects}
      handleModal={handleModal}
    />
  );
};

export default Service;

export const pageQuery = graphql`
  query ServiceByID($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        promo {
          image
          sub
        }
        features {
          title
          sub
          descr
          featuresList {
            img
            title
            descr
          }
        }
        featuredTech {
          heading
          sub
          descr
          image
        }
        technologies {
          image
          name
        }
      }
    }
    latestProjects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
      limit: 2
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
