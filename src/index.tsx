import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import client from './apollo';
import App from './components/App';

import GlobalStyle from './globalStyle';
import { ThemeProvider, theme } from './theme';

const renderComponent = (Component: any) => {
	render(
		<AppContainer>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyle />
						<Component />
					</>
				</ThemeProvider>
			</ApolloProvider>
		</AppContainer>,
		document.getElementById('root')
	);
};
renderComponent(App);

// Webpack Hot Module Replacement API
declare let module: {
	hot: any;
};

if (module.hot) module.hot.accept('./components/App', () => {
	const NewApp = require('./components/App').default;
	renderComponent(NewApp);
});
