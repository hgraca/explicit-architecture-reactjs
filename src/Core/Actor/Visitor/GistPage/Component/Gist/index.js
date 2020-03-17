import React from 'react';
import ProTypes from 'prop-types';
import GistDTO from '../../GistDTO';
import {
  GistAuthor,
  GistDate,
  GistDescription,
  GistInfo,
  GistInfoData,
  GistInfoLabel,
  GistTitle
} from './index.styled';

/**
 * @param GistDTO gistDto
 */
const Gist = ({gistDto}) => (
  <div key={ gistDto.id }>
    <h2><GistTitle>{ gistDto.name }</GistTitle></h2>
    <GistDate>{ gistDto.createdAt }</GistDate> <GistAuthor>{ gistDto.owner }</GistAuthor>
    <GistDescription>{ gistDto.description }</GistDescription>
    <GistInfo><GistInfoLabel>Updated at: </GistInfoLabel><GistInfoData>{ gistDto.updatedAt }</GistInfoData></GistInfo>
    <GistInfo><GistInfoLabel>Pushed at: </GistInfoLabel><GistInfoData>{ gistDto.pushedAt }</GistInfoData></GistInfo>
    <GistInfo><GistInfoLabel>Is fork: </GistInfoLabel><GistInfoData>{ gistDto.isFork ? 'true' : 'false' }</GistInfoData></GistInfo>
    <GistInfo><GistInfoLabel>Is public: </GistInfoLabel><GistInfoData>{ gistDto.isPublic ? 'true' : 'false' }</GistInfoData></GistInfo>
    <GistInfo><GistInfoLabel>Resource path: </GistInfoLabel><GistInfoData>{ gistDto.resourcePath }</GistInfoData></GistInfo>
    <GistInfo><GistInfoLabel>Url: </GistInfoLabel><GistInfoData>{ gistDto.url }</GistInfoData></GistInfo>
    <GistInfo><GistInfoLabel>Viewer has starred: </GistInfoLabel><GistInfoData>{ gistDto.viewerHasStarred ? 'true' : 'false' }</GistInfoData></GistInfo>
  </div>
)

Gist.propTypes = {
  gistDto: ProTypes.instanceOf(GistDTO).isRequired,
}

export default Gist;
