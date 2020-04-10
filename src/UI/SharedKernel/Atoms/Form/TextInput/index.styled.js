import styled from "@emotion/styled";

import { colors, layout, typography } from "~/UI/SharedKernel/Theme";

export const TextInput = styled.input`
  border-color: ${colors.dim};
  border-radius: ${layout.borderRadiusTiny};
  border-style: solid;
  border-width: ${layout.border.medium};
  box-sizing: border-box;
  line-height: ${typography.lineHeight.small};
  padding: ${layout.spacing.regular} ${layout.spacing.body};
  width: 80%;
`;
