import React from "react";
import { Link } from "react-router-dom";

import { Resources, StyledIcon } from "./index.styled";

import FacebookIcon from "~/UI/SharedKernel/Atoms/Icons/FacebookIcon";
import RssIcon from "~/UI/SharedKernel/Atoms/Icons/RssIcon";
import TwitterIcon from "~/UI/SharedKernel/Atoms/Icons/TwitterIcon";

export default () => (
  <Resources>
    <Link to="https://twitter.com/symfony">
      <StyledIcon>
        <TwitterIcon />
      </StyledIcon>
    </Link>
    <Link to="https://www.facebook.com/SensioLabs">
      <StyledIcon>
        <FacebookIcon />
      </StyledIcon>
    </Link>
    <Link to="https://symfony.com/blog/">
      <StyledIcon>
        <RssIcon />
      </StyledIcon>
    </Link>
  </Resources>
);
