import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_JOBS_URL = 'https://api.graphql.jobs/';

const apolloClient = new ApolloClient({
	uri: GRAPHQL_JOBS_URL,
	cache: new InMemoryCache()
});

export default apolloClient;
