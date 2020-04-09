import styled from "@emotion/styled";

import { layout } from "~/UI/SharedKernel/Theme";

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";
  grid-gap: ${layout.spacing.medium};
  min-height: 100%;
`;

export const Header = styled.div`
  grid-area: header;
`;

export const Main = styled.div`
  grid-area: main;
  padding: ${layout.spacing.medium};
`;
