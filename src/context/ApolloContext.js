import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: `https://admin.markoneill.com.au/graphql`,
  cache: new InMemoryCache(),
})