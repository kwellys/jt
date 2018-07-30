import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "../assets/style.scss";
import Favicon from "../assets/images/favicon.png";

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import Modal from "../components/Modal";

class TemplateWrapper extends Component {
  state = {
    isModalOpen: true
  };

  componentWillMount = () => {
    this.setState(prevState => {
      return { isModalOpen: !prevState.isModalOpen };
    });
  };

  handleModal = () => {
    this.setState(prevState => {
      return { isModalOpen: !prevState.isModalOpen };
    });
  };

  render() {
    const { data, children } = this.props;
    console.log(data)
    const servicesData = data.projects.edges;
    const allServices = servicesData.map(item => item.node.frontmatter);
    return (
      <Fragment>
        <Helmet
          title="JetTechnical"
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${Favicon}` }
          ]}
        />
        <Navbar />
        <Fragment>
          {children({ ...this.props, handleModal: this.handleModal })}
        </Fragment>
        <PageFooter />
      </Fragment>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const templateWrapper = graphql`
  query templateWrapperQuery {
    projects: allMarkdownRemark (filter: { frontmatter: { templateKey: { eq: "project" } }}) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;