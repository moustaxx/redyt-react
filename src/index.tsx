import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from 'react-apollo-hooks';

import client from './apollo';
import App from './components/App';

import 'react-quill/dist/quill.snow.css';
import { ThemeProvider } from '@material-ui/styles';
import ThemeContext from './contexts/ThemeContext';
import useThemeReducer from './reducers/useThemeReducer';

const WrappedApp = () => {
	const [{ theme }, themeDispatch] = useThemeReducer();

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<ThemeContext.Provider value={themeDispatch}>
					<App />
				</ThemeContext.Provider>
			</ThemeProvider>
		</ApolloProvider>
	);
};

const Hot = hot(WrappedApp);
render(<Hot />, document.getElementById('root'));
