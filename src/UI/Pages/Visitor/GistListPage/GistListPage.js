import { useQuery } from "@apollo/react-hooks";
import React from "react";

import GIST_LIST from "./gistListQuery.graphql";

import MinimalGistDTO from "~/UI/SharedKernel/Molecules/MinimalGist/MinimalGistDTO";
import MinimalGistList from "~/UI/SharedKernel/Organisms/MinimalGistList";

const GistListPage = () => {
  const { loading, error, data } = useQuery(GIST_LIST, {
    variables: {
      userName: `${process.env.REACT_APP_GIT_HUB_USER}`,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const gistDtoList = data.user.gists.edges.map(({ node }) => {
    return new MinimalGistDTO(
      node.id,
      node.name,
      node.description,
      node.createdAt,
      node.owner.login
    );
  });

  return <MinimalGistList gistDtoList={gistDtoList} />;
};

export default GistListPage;
