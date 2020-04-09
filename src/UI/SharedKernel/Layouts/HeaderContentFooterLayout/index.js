import PropTypes from "prop-types";
import React from "react";

import { Body, Footer, Header, Main } from "./index.styled";

const HeaderContentFooterLayout = ({
  headerComponent,
  contentComponent,
  footerComponent,
}) => {
  return (
    <Body>
      <Header>{headerComponent}</Header>
      <Main>{contentComponent}</Main>
      <Footer>{footerComponent}</Footer>
    </Body>
  );
};

HeaderContentFooterLayout.propTypes = {
  headerComponent: PropTypes.element.isRequired,
  contentComponent: PropTypes.element.isRequired,
  footerComponent: PropTypes.element.isRequired,
};

export default HeaderContentFooterLayout;
