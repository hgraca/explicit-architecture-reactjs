import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import GitHubGqlClient from "./Infrastructure/GraphQLClient/GitHubGqlClient.js";
import { Route, Switch } from 'react-router-dom'
import GistListPage from "./Core/Actor/Visitor/GistListPage";
import GistPage from "./Core/Actor/Visitor/GistPage";
import Header from "./Core/SharedKernel/Organism/Header";
import { Content, ContentRow, ContentRowMain, Sidebar } from "./App.styled";

const App = () => (
  <ApolloProvider client={ GitHubGqlClient }>
    <Header />
    <Content>
      <ContentRow>
        <ContentRowMain>
          <Switch>
            <Route exact path="/" component={ GistListPage }/>
            <Route path="/gist/:name" component={ GistPage }/>
          </Switch>
        </ContentRowMain>
        <Sidebar></Sidebar>
      </ContentRow>
    </Content>
  </ApolloProvider>
);

export default App;
