import styled from "@emotion/styled";

import { colors, layout, typography } from "~/UI/SharedKernel/Theme";

export const Copyright = styled.div`
  @media all and (max-width: ${layout.breakpoints.medium}) {
    margin-top: ${layout.spacing.regular};
  }
`;

export const StyledParagraph = styled.p`
  color: ${colors.dimDark};
  font-size: ${typography.size.small};
  margin-bottom: ${layout.spacing.tiny};
  margin-top: unset;

  @media all and (max-width: ${layout.breakpoints.medium}) {
    text-align: center;
  }
`;
