import React from "react";

import SearchPage from "./SearchPage";

import VisitorPageTemplate from "~/UI/SharedKernel/Templates/VisitorPageTemplate";

export default (props) => (
  <VisitorPageTemplate contentComponent={<SearchPage />} />
);
