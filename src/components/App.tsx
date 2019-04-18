import * as React from 'react';
// import { Route, Redirect } from 'react-router';
// import { Switch } from 'react-router-dom';
import { parse as parseCookie } from 'cookie';

const TopBar = React.lazy(() => import('./TopBar/TopBar'));

import appStyles from './App.style';
import MyRouter from './RouterUtils/RouterUtils';
// import Error from './Error/Error';
// import Forum from './Forum/Forum';
// import PostWindow from './PostWindow/PostWindow';
// import LoginForm from './LoginForm/LoginForm';
// import ViewAccount from './ViewAccount/ViewAccount';

const checkLoginStatus = () => {
	if (!document.cookie) return false;
	const cookies = parseCookie(document.cookie);
	return cookies.logged_in === 'true' ? true : false;
};

export const LoginStatusContext = React.createContext(false);

const App = () => {
	appStyles();
	return (
		<MyRouter>{_locationHref =>
			<LoginStatusContext.Provider value={checkLoginStatus()}>
				<div id='app'>
					<React.Suspense fallback={null}>
						<TopBar />
					</React.Suspense>
					{/* <Switch>
						<Redirect exact from='/' to='/r/Popular' />
						<Route component={PostWindow} path='/r/:subforumName/:postID' />
						<Route component={Forum} path='/r/:subforumName' />
						<Route component={ViewAccount} path='/user/:userName' />
						<Route component={LoginForm} path='/login' />
						<Route component={Error} />
					</Switch> */}
				</div>
			</LoginStatusContext.Provider>
		}</MyRouter>
	);
};
export default React.memo(App);
