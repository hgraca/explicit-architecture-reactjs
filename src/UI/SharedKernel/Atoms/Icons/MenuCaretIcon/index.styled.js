import styled from "@emotion/styled";

import { colors, layout } from "~/UI/SharedKernel/Theme";

export const MenuCaretIcon = styled.span`
  border-width: ${layout.border.thick};
  border-left-color: ${colors.invisible};
  border-left-style: solid;
  border-right-color: ${colors.invisible};
  border-right-style: solid;
  border-top-color: ${colors.white};
  border-top-style: dashed;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
`;
