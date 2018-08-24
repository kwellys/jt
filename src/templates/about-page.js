import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Promo from "../components/Promo";
import Start from "../components/Start";
import Team from "../components/Team";
import AboutUsBrief from "../components/AboutUsBrief";

export const AboutUsTemplate = ({
                                  title,
                                  promo,
                                  aboutUs,
                                  companyandteam,
                                  handleModal
                                }) => {
  return (
    <Fragment>
      <Helmet title={`${title}`}/>
      {promo.length !== 0 || promo  ? <Promo bigLogo={promo.image} sub={promo.sub} handleModal={handleModal}/> : null}
      <AboutUsBrief {...aboutUs}/>
      {companyandteam.length !== 0 || companyandteam ? <Team {...companyandteam}/> : null}
      <Start />
    </Fragment>
  );
};

const AboutUs = ({ data, handleModal }) => {
  const { markdownRemark: about } = data;

  return (
    <AboutUsTemplate
      title={about.frontmatter.title}
      promo={about.frontmatter.promo}
      aboutUs={about.frontmatter.aboutUs}
      companyandteam={about.frontmatter.companyandteam}
      handleModal={handleModal}
    />
  );
};

export default AboutUs;

export const pageQuery = graphql`
  query AboutUsTemplateByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        promo {
          image
          sub
        }
        aboutUs {
          title
          descr
          image
        }
        companyandteam {
          members {
            name
            image
          }
        }
      }
    }
  }
`;