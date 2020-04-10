import ProTypes from "prop-types";
import React from "react";

import GistDTO from "./GistDTO";

import {
  Data,
  DataLabel,
  InfoContainer,
  Introduction,
  Metadata,
  SectionTitle,
} from "~/UI/SharedKernel/Atoms/Text";

/**
 * @param GistDTO gistDto
 */
const Gist = ({ gistDto }) => (
  <div key={gistDto.id}>
    <SectionTitle>{gistDto.name}</SectionTitle>{" "}
    <Metadata>{gistDto.createdAt}</Metadata>
    <Metadata>{gistDto.owner}</Metadata>{" "}
    <Introduction>{gistDto.description}</Introduction>
    <InfoContainer>
      <DataLabel>Updated at: </DataLabel>
      <Data>{gistDto.updatedAt}</Data>
    </InfoContainer>
    <InfoContainer>
      <DataLabel>Pushed at: </DataLabel>
      <Data>{gistDto.pushedAt}</Data>
    </InfoContainer>
    <InfoContainer>
      <DataLabel>Is fork: </DataLabel>
      <Data>{gistDto.isFork ? "true" : "false"}</Data>
    </InfoContainer>
    <InfoContainer>
      <DataLabel>Is public: </DataLabel>
      <Data>{gistDto.isPublic ? "true" : "false"}</Data>
    </InfoContainer>
    <InfoContainer>
      <DataLabel>Resource path: </DataLabel>
      <Data>{gistDto.resourcePath}</Data>
    </InfoContainer>
    <InfoContainer>
      <DataLabel>Url: </DataLabel>
      <Data>{gistDto.url}</Data>
    </InfoContainer>
    <InfoContainer>
      <DataLabel>Viewer has starred: </DataLabel>
      <Data>{gistDto.viewerHasStarred ? "true" : "false"}</Data>
    </InfoContainer>
  </div>
);

Gist.propTypes = {
  gistDto: ProTypes.instanceOf(GistDTO).isRequired,
};

export default Gist;
