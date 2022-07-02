import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Home } from "../pages/Home";


export const client = new ApolloClient({
  uri:'https://api.github.com/users/',
  cache: new InMemoryCache()
})