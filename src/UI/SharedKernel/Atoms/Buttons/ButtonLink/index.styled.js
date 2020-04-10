import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, layout, typography } from "~/UI/SharedKernel/Theme";

export const ButtonLink = styled(Link)`
  background-color: ${colors.primaryDark};
  border-color: ${colors.primaryDark};
  border-radius: ${layout.borderRadius};
  border-style: solid;
  border-width: ${layout.border.medium};
  color: ${colors.white};
  display: inline-block;
  font-size: ${typography.size.medium};
  font-weight: 400;
  padding: ${layout.spacing.body} ${layout.spacing.medium};
  text-align: center;
  text-decoration-line: none;
`;
