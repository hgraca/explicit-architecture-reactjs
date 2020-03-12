import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import GitHubGqlClient from "./Infrastructure/GraphQLClient/GitHubGqlClient.js";

const App = () => (
  <ApolloProvider client={ GitHubGqlClient }>
    <div>
    </div>
  </ApolloProvider>
);

export default App;
