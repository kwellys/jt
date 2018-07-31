import React from "react";
import PropTypes from "prop-types";
import { ServiceTemplate } from "../../templates/service";

const ServicePreview = ({ entry }) => {
  const entryPromo = entry.getIn(['data', 'promo']);
  const promo = entryPromo ? entryPromo.toJS() : [];

  const entryFeatures = entry.getIn(['data', 'features'])
  const features = entryFeatures ? entryFeatures.toJS() : []

  const entryFeaturedTech = entry.getIn(['data', 'featuredTech'])
  const featuredTech = entryFeaturedTech ? entryFeaturedTech.toJS() : []

  const entryTechnologies = entry.getIn(['data', 'technologies'])
  const technologies = entryTechnologies ? entryTechnologies.toJS() : []

  return (
    <ServiceTemplate
      description={entry.getIn(["data", "description"])}
      tags={entry.getIn(["data", "tags"])}
      title={entry.getIn(["data", "title"])}
      promo={promo}
      features={features}
      featuredTech={featuredTech}
      technologies={technologies}
    />
  );
};

ServicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ServicePreview;
