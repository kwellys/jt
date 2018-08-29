import React, {Fragment} from "react";
import Helmet from "react-helmet";
import Promo from "../components/Promo";
import Start from "../components/Start";
import ProjectsList from "../components/ProjectsList";

export const IndustriesPageTemplate = ({
                                  promo,
                                  title,
                                  categoryProjects,
                                  handleModal
                                }) => {
  return (
    <Fragment>
      <Helmet title={`${title} | Industry`}/>
      {promo.length !== 0 || title ? <Promo heading={title} {...promo} handleModal={handleModal}/> : null}
      {categoryProjects.length ? <ProjectsList data={categoryProjects}/> : <h2 className='no-projects'>There are so much more awesome projects to come</h2>}
      <Start/>
    </Fragment>
  );
};

const IndustriesPage = ({data, handleModal}) => {
  const industriesPage = data.industriesPage.frontmatter;
  const categoryProjects = data.categoryProjects.edges;

  const allPages = categoryProjects.map(item => item.node);
  // allPages.map(item => item.frontmatter.categories).map(item => item.some(categories => categories['category'] === 'Healthcare'));

  const filter = (arg) =>  allPages.filter(item => item.frontmatter.categories.some(item => item.category === arg));

  return (
    <IndustriesPageTemplate
      title={industriesPage.title}
      promo={industriesPage.promo}
      categoryProjects={filter(industriesPage.title)}
      handleModal={handleModal}
    />
  );
};

export default IndustriesPage;

export const industriesPageQuery = graphql`
  query industriesPageByID($id: String!) {
    industriesPage: markdownRemark(
    id: { eq: $id }
    ) {
      frontmatter {
        title
        promo {
          sub
          link
        }
      }
    }
    categoryProjects: allMarkdownRemark (
      filter: { frontmatter: { templateKey: { eq: "project" } }}
     ){
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            smallDescr
            preview
            categories {
              category
            }
          }
        }
      }
    }
  }
`;
