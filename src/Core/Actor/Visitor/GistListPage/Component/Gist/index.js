import React from 'react';
import ProTypes from 'prop-types';
import GistDTO from '../../GistDTO';
import { GistAuthor, GistDate, GistDescription, GistTitle } from './index.styled';

/**
 * @param GistDTO gistDto
 */
const Gist = ({gistDto}) => (
  <div>
    <h2><GistTitle to={ `/gist/${ gistDto.name }` }>{ gistDto.name }</GistTitle></h2>
    <GistDate>{ gistDto.createdAt }</GistDate> <GistAuthor>{ gistDto.owner }</GistAuthor>
    <GistDescription>{ gistDto.description }</GistDescription>
  </div>
)

Gist.propTypes = {
  gistDto: ProTypes.instanceOf(GistDTO).isRequired,
}

export default Gist;
