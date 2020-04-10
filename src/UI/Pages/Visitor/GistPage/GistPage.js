import { useQuery } from "@apollo/react-hooks";
import React from "react";

import GIST from "./gistQuery.graphql";

import Gist from "~/UI/SharedKernel/Molecules/Gist";
import GistDTO from "~/UI/SharedKernel/Molecules/Gist/GistDTO";

const GistPage = ({
  match: {
    params: { name: gistName },
  },
}) => {
  const { loading, error, data } = useQuery(GIST, {
    variables: {
      userName: `${process.env.REACT_APP_GIT_HUB_USER}`,
      gistName: `${gistName}`,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( ${error} </p>;

  const node = data.user.gist;
  const gistDto = new GistDTO(
    node.id,
    node.name,
    node.description,
    node.createdAt,
    node.owner.login,
    node.isFork,
    node.isPublic,
    node.pushedAt,
    node.resourcePath,
    node.updatedAt,
    node.url,
    node.viewerHasStarred
  );

  return <Gist gistDto={gistDto} />;
};

export default GistPage;
