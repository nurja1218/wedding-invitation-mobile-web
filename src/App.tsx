import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './configs/apollo/client/hybrid.client';
import { BrowserRouter } from 'react-router-dom';
import { RoutesForBase } from './routes';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './lib/styles';

export default function App() {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <BrowserRouter>
                <RoutesForBase />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
                />
                <Toaster />
            </BrowserRouter>
        </ApolloProvider>
    );
}
