import React, { Fragment } from "react";

import Helmet from "react-helmet";
import Promo from "../components/Promo";
import FeaturesList from "../components/FeaturesList";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials/index";
import Team from "../components/Team";
import Start from "../components/Start";
import WhyUs from "../components/WhyUs";
import Geography from "../components/Geography";
import Touch from "../components/Touch";
import LatestProjects from "../components/LatestProjects";
import Industries from "../components/Industries";

export const IndexPageTemplate = ({
                                    title,
                                    promo,
                                    features,
                                    services,
                                    technologies,
                                    sortedProjects,
                                    testimonials,
                                    why,
                                    geography,
                                    companyandteam,
                                    handleModal
                                  }) => (
  <Fragment>
    <Helmet title="JetTechnical | We bring your web projects to life" />
    <Promo {...promo} handleModal={handleModal} />
    <FeaturesList data={features} />
    <Industries />
    <Services data={services} />
    <Touch />
    <Technologies data={technologies} />
    {sortedProjects ? <LatestProjects data={sortedProjects} /> : null}
    <Testimonials data={testimonials} />
    <WhyUs data={why} />
    <Geography data={geography} />
    <Team {...companyandteam} hasTitle />
    <Start />
  </Fragment>
);

const IndexPage = ({ data, handleModal }) => {
  const index = data.index.frontmatter;
  const latestProjectsData = data.latestProjects.edges.map(item => item.node.frontmatter);

  return (
    <IndexPageTemplate
      promo={index.promo}
      features={index.features}
      services={index.services}
      technologies={index.technologies}
      testimonials={index.testimonials}
      why={index.why}
      geography={index.geography}
      companyandteam={index.companyandteam}
      sortedProjects={latestProjectsData}
      handleModal={handleModal}
    />
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    index: markdownRemark(id: { eq: $id }) {
      frontmatter {
        promo {
          image
          descr
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
        services {
          img
          title
          link
          descr {
            service
          }
        }
        technologies {
          title
          list {
            image
            name
          }
        }
        testimonials {
          company
          img
          personName
          occupation
          features
          review
        }
        why {
          image
          title
          descr
        }
        geography {
          company
          link
          logo
          position {
            top
            left
          }
        }
        companyandteam {
          description
          members {
            image
            name
            occupation
          }
        }
      }
    }
    latestProjects: allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "project" } }},
      limit: 3
     ){
      edges {
        node {
          frontmatter {
            title
            slider {
              img
            }
          }
        }
      }
    }
  }
`
