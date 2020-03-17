import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import GitHubGqlClient from "./Infrastructure/GraphQLClient/GitHubGqlClient.js";
import { Route, Switch } from 'react-router-dom'

const App = () => (
  <ApolloProvider client={ GitHubGqlClient }>
    <Switch>
      <Route exact path="/" component={ SomeComponent }/>
    </Switch>
  </ApolloProvider>
);

export default App;
