import styled from "@emotion/styled";

import { layout } from "~/UI/SharedKernel/Theme";

export const LandingPage = styled.div`
  display: flex;

  @media all and (max-width: ${layout.breakpoints.xlarge}) {
    align-items: center;
    flex-direction: column;
  }

  @media all and (min-width: ${layout.breakpoints.xlarge}) {
    justify-content: center;
  }
`;
