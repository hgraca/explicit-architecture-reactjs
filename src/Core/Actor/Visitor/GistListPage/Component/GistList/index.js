import React from 'react';
import Gist from "../Gist";
import ProTypes from "prop-types";
import GistDTO from "../../GistDTO";

/**
 * @param GistDTO[] gistDtoList
 */
const GistList = ({gistDtoList}) => {
  return gistDtoList.map(gistDto => {
      return <Gist key={ gistDto.id } gistDto={ gistDto }/>
    }
  );
}

GistList.propTypes = {
  gistDtoList: ProTypes.arrayOf(ProTypes.instanceOf(GistDTO)).isRequired,
}

export default GistList;
