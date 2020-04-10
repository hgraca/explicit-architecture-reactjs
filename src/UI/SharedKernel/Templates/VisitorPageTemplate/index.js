import PropTypes from "prop-types";
import React from "react";

import HeaderContentFooterLayout from "~/UI/SharedKernel/Layouts/HeaderContentFooterLayout";
import DefaultFooter from "~/UI/SharedKernel/Organisms/DefaultFooter";
import VisitorHeader from "~/UI/SharedKernel/Organisms/Header/VisitorHeader";

const Template = ({ contentComponent }) => (
  <HeaderContentFooterLayout
    headerComponent={<VisitorHeader />}
    contentComponent={contentComponent}
    footerComponent={<DefaultFooter />}
  />
);

Template.propTypes = {
  contentComponent: PropTypes.element.isRequired,
};

export default Template;
