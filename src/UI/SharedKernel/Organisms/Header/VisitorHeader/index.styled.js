import styled from "@emotion/styled";

import { colors, layout } from "~/UI/SharedKernel/Theme";

export const VisitorHeader = styled.div`
  background-color: ${colors.primaryDark};
  display: flex;
  min-height: ${layout.elements.panel.height.small};
  padding: ${layout.spacing.regular} ${layout.spacing.medium};

  @media all and (max-width: ${layout.breakpoints.medium}) {
    align-items: flex-start;
    flex-direction: column;
  }

  @media all and (min-width: ${layout.breakpoints.medium}) {
    align-items: center;
  }
`;
