import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import { parse as parseCookie } from 'cookie';

const TopBar = React.lazy(() => import('./TopBar/TopBar'));

import appStyles from './App.style';
import Error from './Views/Error/Error';
import Forum from './Forum/Forum';
import LoginForm from './LoginForm/LoginForm';
import AccountView from './Views/AccountView/AccountView';
import SettingsView from './Views/SettingsView/SettingsView';

interface ILoginStatusContext {
	loginStatus: boolean;
	setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginStatusContext = React.createContext<ILoginStatusContext>({
	loginStatus: false,
	setLoginStatus: () => ({})
});

const App = () => {
	appStyles();

	const [loginStatus, setLoginStatus] = React.useState(() => {
		if (!document.cookie) return false;
		const cookies = parseCookie(document.cookie);
		return cookies.logged_in === 'true' ? true : false;
	});
	
	return (
		<LoginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
			<BrowserRouter>
				<div id='app'>
					<React.Suspense fallback={null}>
						<TopBar loginStatus={loginStatus} />
					</React.Suspense>
					<Switch>
						<Redirect exact from='/' to='/r/Popular' />
						<Route component={Forum} path='/r/:subforumName' />
						<Route component={AccountView} path='/user/:userName' />
						<Route component={SettingsView} path='/settings' />
						<Route component={LoginForm} path='/login' />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		</LoginStatusContext.Provider>
	);
};
export default React.memo(App);
