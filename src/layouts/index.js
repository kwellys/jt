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

  getProjects = () => {
    const projectsData = this.props.data.projects.edges.map(item => item.node.frontmatter);
    return projectsData;
  };

  getServices = () => {
    const servicesData = this.props.data.services.edges.map(item => item.node.frontmatter);
    return servicesData;
  };

  render() {
    const { children, data } = this.props;
    console.log(templateWrapper);

    const menuItems = [
      {
        title: "Services",
        link: 'services',
        sublist: this.getServices()
      },
      {
        title: "Industries",
        link: "expertise",
        sublist: ''
      },
      {
        title: "Technologies",
        link: "technologies",
        sublist: ''
      },
      {
        title: "Work",
        link: "projects",
        sublist: this.getProjects()
      },
      {
        title: "About Us",
        link: "about-us",
        sublist: ''
      }
    ];

    return (
      <Fragment>
        <Helmet
          title="JetTechnical"
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${Favicon}` }
          ]}
        />
        {this.state.isModalOpen ? <Modal handleModal={this.handleModal}/> : null}
        <PageHeader menuList = {menuItems} state={this.props.state} modalState={this} handleModal={this.handleModal} />
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
    services: allMarkdownRemark (filter: { frontmatter: { templateKey: { eq: "service" } }}) {
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