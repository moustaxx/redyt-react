import { ApolloClient } from 'apollo-client';

import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { BatchHttpLink } from 'apollo-link-batch-http';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';

// import defaults from './state/defaults';
// import mutations from './state/mutations';
// import queries from './apollo/state/resolvers/queries';

const cache = new InMemoryCache();
const stateLink = withClientState({
	cache,
	// defaults,
	resolvers: {
		// Query: { ...queries },
		// Mutation: { ...mutations },
	}
});

const client = new ApolloClient({
	cache,
	link: ApolloLink.from([
		onError(({ graphQLErrors, networkError }) => {
			if (graphQLErrors)
				graphQLErrors.map(({ message, locations, path }) =>
					console.warn(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
				);
			if (networkError) console.log(`[Network error (logout)]: ${networkError}`);
		}),
		stateLink,
		new BatchHttpLink({
			uri: 'http://localhost:4000/graphql',
			credentials: 'include'
		})
	])
});
client.onResetStore(stateLink.writeDefaults as any);

export default client;
