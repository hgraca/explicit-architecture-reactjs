import React from "react";

import Copyright from "./Components/Copyright";
import Resources from "./Components/Resources";
import { DefaultFooter } from "./index.styled";

import { Separator } from "~/UI/SharedKernel/Atoms/Layout/Separator";

export default () => (
  <DefaultFooter>
    <Copyright />
    <Separator />
    <Resources />
  </DefaultFooter>
);
