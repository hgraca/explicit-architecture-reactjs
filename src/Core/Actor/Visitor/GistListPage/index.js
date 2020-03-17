import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GistList from './Component/GistList';
import GistDTO from './GistDTO';
import GIST_LIST from './gistListQuery.graphql';

const GistListPage = () => {

  const { loading, error, data } = useQuery(GIST_LIST, {
    variables: {
      userName: `${ process.env.REACT_APP_GIT_HUB_USER }`,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const gistDtoList = data.user.gists.edges.map(node => {
      return new GistDTO(node);
    }
  )

  return <GistList gistDtoList={ gistDtoList }></GistList>;
}

export default GistListPage;
