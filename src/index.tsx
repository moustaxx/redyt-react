import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import client from './apollo';
import App from './components/App';

import GlobalStyle from './globalStyle';
import { ThemeProvider, darkTheme, lightTheme } from './theme';

export const SetThemeContext = React.createContext(() => {/**/});

const WrappedApp = () => {
	const [theme, setTheme] = React.useState(darkTheme);
	const [isDarkThemeOn, setIsDarkThemeOn] = React.useState(true);

	const setNewTheme = () => {
		if (isDarkThemeOn) setTheme(lightTheme);
		else setTheme(darkTheme);
		setIsDarkThemeOn(!isDarkThemeOn);
	};

	return (
		<ApolloProvider client={client}>
			<ApolloHooksProvider client={client}>
				<ThemeProvider theme={theme}>
					<SetThemeContext.Provider value={setNewTheme}>
						<>
							<GlobalStyle />
								<App />
						</>
					</SetThemeContext.Provider>
				</ThemeProvider>
			</ApolloHooksProvider>
		</ApolloProvider>
	);
};

const Hot = hot(WrappedApp);
render(<Hot />, document.getElementById('root'));
