import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/react-hooks';
import { ENDPOINT } from './client.cfg';

const link = createHttpLink({
    uri: `${ENDPOINT}`,
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export default client;
