import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8lx8o19p801xxcstx4zco/master',
    cache: new InMemoryCache()
})