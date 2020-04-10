import styled from "@emotion/styled";

import { colors, layout } from "~/UI/SharedKernel/Theme";

export const DefaultFooter = styled.div`
  align-items: center;
  background-color: ${colors.dimLight};
  display: flex;
  min-height: ${layout.elements.panel.height.small};
  padding: ${layout.spacing.medium};

  @media all and (max-width: ${layout.breakpoints.medium}) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
