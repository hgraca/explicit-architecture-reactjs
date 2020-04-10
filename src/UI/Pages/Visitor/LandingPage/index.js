import React from "react";

import LandingPage from "./LandingPage";

import HeaderContentLayout from "~/UI/SharedKernel/Layouts/HeaderContentLayout";
import WelcomeHeader from "~/UI/SharedKernel/Organisms/Header/WelcomeHeader";

export default () => (
  <HeaderContentLayout
    headerComponent=<WelcomeHeader />
    contentComponent=<LandingPage />
  />
);
