import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GIST from './gistQuery.graphql';
import GistDTO from "./GistDTO";
import Gist from "./Component/Gist";

const GistPage = ({match: {params: {name: gistName}}}) => {
  const { loading, error, data } = useQuery(GIST, {
    variables: {
      userName: `${ process.env.REACT_APP_GIT_HUB_USER }`,
      gistName: `${ gistName }`,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( ${error} </p>;

  const gistDto = new GistDTO(data.user.gist);

  return <Gist gistDto={ gistDto }></Gist>;
}

export default GistPage;
