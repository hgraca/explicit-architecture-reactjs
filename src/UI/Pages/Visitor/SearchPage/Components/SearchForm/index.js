import ProTypes from "prop-types";
import React from "react";

import { TextInput } from "~/UI/SharedKernel/Atoms/Form/TextInput";

const SearchFormComponent = ({ setSearchText }) => {
  const searchInputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchText(searchInputRef.current.value);
    console.log("Search string: " + searchInputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        ref={searchInputRef}
        type="text"
        placeholder="Search for..."
        autoComplete="off"
        autoFocus=""
        data-no-results-message="No results found"
      />
    </form>
  );
};

SearchFormComponent.propTypes = {
  setSearchText: ProTypes.func.isRequired,
};

export default SearchFormComponent;
