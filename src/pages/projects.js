import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Promo from "../components/Promo";
import ProjectsList from "../components/ProjectsList";
import Start from "../components/Start";

export default class ProjectsPage extends Component {
  render () {
    const { data, handleModal } = this.props;
    const { edges: projects } = data.allMarkdownRemark;
    const allProjects = projects.map(item => item.node.frontmatter);
    return (
      <Fragment>
        <Helmet title='Our Projects'/>
        <Promo heading="Projects" sub={"We've been working with startups to build and scale digital products. Here is some of the client work we've created from scratch, and some of the projects we've helped"} handleModal = {handleModal}/>
        <ProjectsList data={allProjects}/>
        <Start />
      </Fragment>
    )
  }
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired
};


export const projectsQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark (filter: { frontmatter: { templateKey: { eq: "project" } }})  {
      edges {
        node {
          frontmatter {
            title
            category
            promo {
              sub
            }
            slider {
              img
            }
          }
        }
      }
    }
  }
`
