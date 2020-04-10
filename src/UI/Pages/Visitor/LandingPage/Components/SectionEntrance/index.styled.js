import styled from "@emotion/styled";

import { colors, layout, typography } from "~/UI/SharedKernel/Theme";

export const SectionEntranceContainer = styled.div`
  background-color: ${colors.dimLight};
  border-radius: ${layout.borderRadiusSmall};
  box-sizing: border-box;
  margin: ${layout.spacing.large};
  padding: ${layout.spacing.large} ${layout.spacing.xlarge};
  text-align: center;
  width: ${layout.elements.panel.width.medium};
`;

export const IntroductionText = styled.div`
  color: ${colors.primaryDark};
  font-size: ${typography.size.large};
  font-weight: ${typography.weight.light};
  line-height: ${typography.lineHeight.large};
  text-align: center;
`;
