import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors, layout, typography } from "~/UI/SharedKernel/Theme";

const title = css`
  color: ${colors.primaryActive};
  display: block;
  font-size: ${typography.size.xlarge};
  font-weight: ${typography.weight.medium};
  max-width: fit-content;
  text-decoration: none;
`;

export const ChapterTitle = styled.div`
  ${title};
`;

export const SectionTitle = styled.div`
  ${title};
`;

export const SectionTitleLink = styled(Link)`
  ${title};
`;

export const Metadata = styled.span`
  color: ${colors.dimDark};
  margin-right: ${layout.spacing.medium};
`;

const text = css`
  font-size: ${typography.size.medium};
  margin-top: unset;
`;

export const Introduction = styled.p`
  ${text};
  font-style: italic;
`;

export const Paragraph = styled.p`
  ${text};
`;

export const DataLabel = styled.div`
  color: ${colors.black};
  display: inline;
  font-size: ${typography.size.body};
`;

export const Data = styled.div`
  color: ${colors.dimDark};
  display: inline;
  font-size: ${typography.size.body};
`;

export const InfoContainer = styled.div`
  display: block;
`;
