import PropTypes from "prop-types";
import React from "react";

import { Body, Header, Main } from "./index.styled";

const HeaderContentLayout = ({ headerComponent, contentComponent }) => {
  return (
    <Body>
      <Header>{headerComponent}</Header>
      <Main>{contentComponent}</Main>
    </Body>
  );
};

HeaderContentLayout.propTypes = {
  headerComponent: PropTypes.element.isRequired,
  contentComponent: PropTypes.element.isRequired,
};

export default HeaderContentLayout;
