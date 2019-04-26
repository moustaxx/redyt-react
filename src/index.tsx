import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import client from './apollo';
import App from './components/App';

import { ThemeProvider } from '@material-ui/styles';
import { darkTheme, lightTheme } from './theme';
import { IColors } from 'Components/Forum/Forum.apollo';

export const SetThemeContext = React.createContext(
	(a: 'overwrite' | 'toggle' = 'toggle', b?: IColors | false) => {/**/}
);

const WrappedApp = () => {
	const [theme, setTheme] = React.useState(darkTheme);
	const [isDarkThemeOn, setIsDarkThemeOn] = React.useState(true);

	const setNewTheme = (type: 'overwrite' | 'toggle' = 'toggle', subforum?: IColors | false) => {
		if (type === 'toggle') {
			if (isDarkThemeOn) setTheme(lightTheme);
			else setTheme(darkTheme);
			setIsDarkThemeOn(!isDarkThemeOn);
		} else if (subforum) {
			const newTheme = { ...theme, subforum };
			if (JSON.stringify(theme) !== JSON.stringify(newTheme)) setTheme(newTheme);
		}
	};

	return (
		<ApolloProvider client={client}>
			<ApolloHooksProvider client={client}>
				<ThemeProvider theme={theme}>
					<SetThemeContext.Provider value={setNewTheme}>
						<App />
					</SetThemeContext.Provider>
				</ThemeProvider>
			</ApolloHooksProvider>
		</ApolloProvider>
	);
};

const Hot = hot(WrappedApp);
render(<Hot />, document.getElementById('root'));
