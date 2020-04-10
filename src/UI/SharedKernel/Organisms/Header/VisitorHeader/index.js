import React from "react";

import Branding from "./Components/Branding";
import Menu from "./Components/Menu";
import { VisitorHeader } from "./index.styled";

import { Separator } from "~/UI/SharedKernel/Atoms/Layout/Separator";

export default () => (
  <VisitorHeader>
    <Branding />
    <Separator />
    <Menu />
  </VisitorHeader>
);
