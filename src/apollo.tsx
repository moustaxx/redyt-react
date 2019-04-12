import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: ApolloLink.from([
		onError(({ graphQLErrors, networkError }) => {
			if (graphQLErrors)
				graphQLErrors.map(({ message, locations, path }) =>
					console.warn(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
				);
			if (networkError) console.log(`[Network error (logout)]: ${networkError}`);
		}),
		new BatchHttpLink({
			uri: 'http://localhost:4000/graphql',
			credentials: 'include'
		})
	])
});

export default client;
