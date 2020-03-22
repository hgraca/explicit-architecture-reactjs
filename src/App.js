import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import GitHubGqlClient from "./Infrastructure/GraphQLClient/GitHubGqlClient.js";
import Routing from "./Infrastructure/Routing";

const App = () => (
  <ApolloProvider client={ GitHubGqlClient }>
    <Routing />
  </ApolloProvider>
);

export default App;
