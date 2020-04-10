import { useQuery } from "@apollo/react-hooks";
import ProTypes from "prop-types";
import React from "react";

import GIST_LIST from "./gistListQuery.graphql";
import { SearchResultsContainer } from "./index.styled";

import MinimalGistDTO from "~/UI/SharedKernel/Molecules/MinimalGist/MinimalGistDTO";
import MinimalGistList from "~/UI/SharedKernel/Organisms/MinimalGistList";

/**
 * @param GistDTO[] gistDtoList
 */
const SearchResults = ({ searchText }) => {
  const { loading, error, data } = useQuery(GIST_LIST, {
    variables: {
      userName: `${searchText}`,
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

  return (
    <SearchResultsContainer>
      <MinimalGistList gistDtoList={gistDtoList} />
    </SearchResultsContainer>
  );
};

SearchResults.propTypes = {
  searchText: ProTypes.string.isRequired,
};

export default SearchResults;
