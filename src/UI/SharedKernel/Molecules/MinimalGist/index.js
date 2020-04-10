import ProTypes from "prop-types";
import React from "react";

import MinimalGistDTO from "./MinimalGistDTO";

import {
  Introduction,
  Metadata,
  SectionTitleLink,
} from "~/UI/SharedKernel/Atoms/Text";

/**
 * @param GistDTO gistDto
 */
const MinimalGist = ({ minimalGistDTO }) => (
  <>
    <SectionTitleLink to={`/gist/${minimalGistDTO.name}`}>
      {minimalGistDTO.name}
    </SectionTitleLink>
    <Metadata>{minimalGistDTO.createdAt}</Metadata>{" "}
    <Metadata>{minimalGistDTO.owner}</Metadata>
    <Introduction>{minimalGistDTO.description}</Introduction>
  </>
);

MinimalGist.propTypes = {
  minimalGistDTO: ProTypes.instanceOf(MinimalGistDTO).isRequired,
};

export default MinimalGist;
