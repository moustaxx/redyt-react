import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import { parse as parseCookie } from 'cookie';

import MyRouter from './RouterUtils/RouterUtils';
import Error from './Error/Error';
import TopBar from './TopBar/TopBar';
import Forum from './Forum/Forum';
import PostWindow from './PostWindow/PostWindow';
import LoginForm from './LoginForm/LoginForm';
import ViewAccount from './ViewAccount/ViewAccount';

const checkLoginStatus = () => {
	if (!document.cookie) return false;
	const cookies = parseCookie(document.cookie);
	return cookies.logged_in === 'true' ? true : false;
};

export const LoginStatusContext = React.createContext(false);

const App = () => {
	return (
		<MyRouter>{_locationHref =>
			<LoginStatusContext.Provider value={checkLoginStatus()}>
				<div id='app'>
					<TopBar />
					<Switch>
						<Redirect exact from='/' to='/r/Popular' />
						<Route component={PostWindow} path='/r/:subforumName/:postID' />
						<Route component={Forum} path='/r/:subforumName' />
						<Route component={ViewAccount} path='/user/:userID' />
						<Route component={LoginForm} path='/login' />
						<Route component={Error} />
					</Switch>
				</div>
			</LoginStatusContext.Provider>
		}</MyRouter>
	);
};
export default React.memo(App);
