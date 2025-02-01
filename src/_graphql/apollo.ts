import { ApolloClient, InMemoryCache } from '@apollo/client'

export const wpClient = new ApolloClient({
	uri: process.env.WP_GRAPHQL_URL!,
	cache: new InMemoryCache(),
})
