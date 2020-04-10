import ProTypes from "prop-types";
import React from "react";

import { IntroductionText, SectionEntranceContainer } from "./index.styled";

import { ButtonLink } from "~/UI/SharedKernel/Atoms/Buttons/ButtonLink/index.styled";

const SectionEntrance = ({
  introductionText,
  buttonIcon,
  buttonText,
  buttonLink,
}) => (
  <SectionEntranceContainer>
    <IntroductionText>{introductionText}</IntroductionText>
    <p>
      <ButtonLink to={`/${buttonLink}`}>
        {buttonIcon} {buttonText}
      </ButtonLink>
    </p>
  </SectionEntranceContainer>
);

SectionEntrance.propTypes = {
  introductionText: ProTypes.object.isRequired,
  buttonIcon: ProTypes.object.isRequired,
  buttonText: ProTypes.string.isRequired,
  buttonLink: ProTypes.string.isRequired,
};

export default SectionEntrance;
