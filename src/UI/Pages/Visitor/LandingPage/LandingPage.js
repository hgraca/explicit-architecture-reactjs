import React from "react";

import SectionEntrance from "./Components/SectionEntrance/index.js";
import { LandingPage } from "./LandingPage.styled";

import LockIcon from "~/UI/SharedKernel/Atoms/Icons/LockIcon";
import UsersIcon from "~/UI/SharedKernel/Atoms/Icons/UsersIcon";

export default () => {
  return (
    <LandingPage>
      <SectionEntrance
        introductionText={
          <>
            Browse the <strong>public section</strong> of the demo application.
          </>
        }
        buttonIcon={<UsersIcon />}
        buttonText="Browse application"
        buttonLink="gist-list"
      />
      <SectionEntrance
        introductionText={
          <>
            Browse the <strong>admin backend</strong> of the demo application.
          </>
        }
        buttonIcon={<LockIcon />}
        buttonText="Browse backend"
        buttonLink="admin"
      />
    </LandingPage>
  );
};
