import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import GitHubGqlClient from "./Infrastructure/GraphQLClient/GitHubGqlClient.js";
import { Route, Switch } from 'react-router-dom'
import { Header, Sidebar, Content} from "./App.styled";

const App = () => (
  <ApolloProvider client={ GitHubGqlClient }>
    <Header></Header>
    <Sidebar></Sidebar>
    <Content>
      <Switch>
        <Route exact path="/" component={ SomeComponent }/>
      </Switch>
    </Content>
  </ApolloProvider>
);

export default App;
