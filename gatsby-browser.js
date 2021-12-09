import React from "react"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: `https://admin.markoneill.com.au/?graphql=true`,
  mode: "no-cors",
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
