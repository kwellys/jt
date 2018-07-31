import React from "react";
import PropTypes from "prop-types";
import { ProjectTemplate } from "../../templates/project";

const ProjectPreview = ({ entry }) => {
  const entryPromo = entry.getIn(['data', 'promo']);
  const promo = entryPromo ? entryPromo.toJS() : [];

  const entrySlider = entry.getIn(['data', 'slider']);
  const slider = entrySlider ? entrySlider.toJS() : [];

  const entryTestimonial = entry.getIn(['data', 'testimonial']);
  const testimonial = entryTestimonial ? entryTestimonial.toJS() : [];

  const entryTechnologies = entry.getIn(['data', 'technologies']);
  const technologies = entryTechnologies ? entryTechnologies.toJS() : [];

  const entrySolutions = entry.getIn(['data', 'solutions']);
  const solutions = entrySolutions ? entrySolutions.toJS() : [];

  const entryGoals = entry.getIn(['data', 'goals']);
  const goals = entryGoals ? entryGoals.toJS() : [];

  const entryStages = entry.getIn(['data', 'stages']);
  const stages = entryStages ? entryStages.toJS() : [];

  const entryResults = entry.getIn(['data', 'projectResults']);
  const projectResults = entryResults ? entryResults.toJS() : [];

  return (
    <ProjectTemplate
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
      promo={promo}
      goals={goals}
      slider={slider}
      technologies={technologies}
      testimonial={testimonial}
      projectResults={projectResults}
      stages={stages}
      solutions={solutions}
    />
  );
};

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProjectPreview;
