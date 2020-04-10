import styled from "@emotion/styled";

import { colors, layout } from "~/UI/SharedKernel/Theme";

export const Resources = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${layout.elements.panel.width.tiny};
`;

export const StyledIcon = styled.i`
  color: ${colors.dimDark};
  font-size: ${layout.elements.image.font.large};
`;
