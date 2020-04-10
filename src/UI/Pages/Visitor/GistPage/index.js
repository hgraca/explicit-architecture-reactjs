import React from "react";

import GistPage from "./GistPage";

import VisitorPageTemplate from "~/UI/SharedKernel/Templates/VisitorPageTemplate";

export default (props) => (
  <VisitorPageTemplate contentComponent={<GistPage {...props} />} />
);
