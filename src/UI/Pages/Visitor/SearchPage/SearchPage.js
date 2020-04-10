import React, { useState } from "react";

import SearchForm from "./Components/SearchForm";
import SearchResults from "./Components/SearchResults";

export default () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <SearchForm setSearchText={setSearchText} />
      {searchText && <SearchResults searchText={searchText} />}
    </>
  );
};
