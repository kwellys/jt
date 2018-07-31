import React from "react";
import PropTypes from "prop-types";
import { IndustriesPageTemplate } from "../../templates/ind-page";

const IndustriesPagePreview = ({ entry }) => {
  const entryPromo = entry.getIn(['data', 'promo']);
  const promo = entryPromo ? entryPromo.toJS() : [];
  console.log(entry);

  return (
    <IndustriesPageTemplate
      title={entry.getIn(["data", "title"])}
      promo={promo}
    />
  );
};

IndustriesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default IndustriesPagePreview;
