import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";

import GitHubGqlClient from "./Infrastructure/GraphQLClient/GitHubGqlClient.js";
import Routing from "./Infrastructure/Routing";

const App = () => (
  <ApolloProvider client={GitHubGqlClient}>
    <Routing />
  </ApolloProvider>
);

export default App;
