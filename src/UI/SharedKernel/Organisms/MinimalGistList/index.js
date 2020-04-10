import ProTypes from "prop-types";
import React from "react";

import MinimalGist from "~/UI/SharedKernel/Molecules/MinimalGist";
import MinimalGistDTO from "~/UI/SharedKernel/Molecules/MinimalGist/MinimalGistDTO";

/**
 * @param MinimalGistDTO[] gistDtoList
 */
const MinimalGistList = ({ gistDtoList }) => {
  return gistDtoList.map((minimalGistDTO) => {
    return (
      <MinimalGist key={minimalGistDTO.id} minimalGistDTO={minimalGistDTO} />
    );
  });
};

MinimalGistList.propTypes = {
  gistDtoList: ProTypes.arrayOf(ProTypes.instanceOf(MinimalGistDTO)).isRequired,
};

export default MinimalGistList;
