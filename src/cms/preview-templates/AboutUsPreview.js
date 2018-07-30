import React from "react";
import PropTypes from "prop-types";
import { AboutUsTemplate } from "../../templates/about-page";

const AboutUsPreview = ({ entry }) => {
  const entryPromo = entry.getIn(['data', 'promo']);
  const promo = entryPromo ? entryPromo.toJS() : [];

  const entryAboutUs = entry.getIn(['data', 'aboutUs']);
  const aboutUs = entryAboutUs ? entryAboutUs.toJS() : [];

  const entryTeam = entry.getIn(["data", "companyandteam"]);
  const team = entryTeam ? entryTeam.toJS() : [];

  return (
    <AboutUsTemplate
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
      promo={promo}
      aboutUs={aboutUs}
      companyandteam={team}
    />
  );
};

AboutUsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutUsPreview;
