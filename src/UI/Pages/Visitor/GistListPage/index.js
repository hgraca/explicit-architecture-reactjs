import React from "react";

import GistListPage from "./GistListPage";

import VisitorPageTemplate from "~/UI/SharedKernel/Templates/VisitorPageTemplate";

export default () => (
  <VisitorPageTemplate contentComponent={<GistListPage />} />
);
