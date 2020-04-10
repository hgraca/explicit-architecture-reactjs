import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, layout, typography } from "~/UI/SharedKernel/Theme";

export const Nav = styled.div`
  display: flex;
  width: ${layout.elements.panel.width.small};
  justify-content: space-between;

  @media all and (max-width: ${layout.breakpoints.medium}) {
    flex-direction: column;
  }
`;

export const NavItemLink = styled(Link)`
  color: ${colors.white};
  font-size: ${typography.size.medium};
  text-decoration-line: none;

  @media all and (max-width: ${layout.breakpoints.medium}) {
    text-align: left;
    margin: ${layout.spacing.tiny};
  }
`;

export const NavItemIcon = styled.span`
  margin: ${layout.spacing.tiny};
`;

// export const NavBarListItemDropdown = styled.li`
//   box-sizing:border-box;
//   color: ${colors.primaryDark};
//   display:block;
//   float:left;
//   font-size: ${typography.size.medium};
//   height: ${layout.elements.panel.height.medium};
//   line-height:${typography.lineHeight.medium};
//   list-style-image:none;
//   list-style-position:outside;
//   list-style-type:none;
//   margin-bottom:0;
//   position:relative;
//   text-align:left;
//   text-size-adjust:100%;
// `;
