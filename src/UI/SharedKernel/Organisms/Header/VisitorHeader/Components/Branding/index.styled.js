import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, layout, typography } from "~/UI/SharedKernel/Theme";

export const BrandingLink = styled(Link)`
  color: ${colors.white};
  font-size: ${typography.size.large};
  text-decoration-line: none;
  margin: ${layout.spacing.tiny};
`;
