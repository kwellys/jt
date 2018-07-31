import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, widgetFor }) => {
  const entryFeatures = entry.getIn(["data", "features"]);
  const features = entryFeatures ? entryFeatures.toJS() : [];

  const entryServices = entry.getIn(["data", "services"]);
  const services = entryServices ? entryServices.toJS() : [];

  const entryTechnologies = entry.getIn(["data", "technologies"]);
  const technologies = entryTechnologies ? entryTechnologies.toJS() : [];

  const entryTestimonials = entry.getIn(["data", "testimonials"]);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  const entryTeam = entry.getIn(["data", "companyandteam"]);
  const team = entryTeam ? entryTeam.toJS() : [];

  const entryWhy = entry.getIn(["data", "why"]);
  const why = entryWhy ? entryWhy.toJS() : [];

  const entryGeography = entry.getIn(["data", "geography"]);
  const geography = entryGeography ? entryGeography.toJS() : [];

  return (
    <IndexPageTemplate
      title={entry.getIn(["data", "title"])}
      promo={entry.getIn(["data", "promo"])}
      features={features}
      services={services}
      technologies={technologies}
      testimonials={testimonials}
      companyandteam={team}
      why={why}
      geography={geography}
    />
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default IndexPagePreview;
