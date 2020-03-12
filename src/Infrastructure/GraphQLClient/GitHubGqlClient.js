import ApolloClient from "apollo-boost";

const GitHubGqlClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GIT_HUB_TOKEN}`,
  },
});

export default GitHubGqlClient;
