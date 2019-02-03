import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from 'react-apollo';

import client from './apollo';
import App from './components/App';

import GlobalStyle from './globalStyle';
import { ThemeProvider, theme } from './theme';

const WrappedApp = () => (
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				<App />
			</>
		</ThemeProvider>
	</ApolloProvider>
);

const Hot = hot(WrappedApp);
render(<Hot />, document.getElementById('root'));
