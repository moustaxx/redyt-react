import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { parse as parseCookie } from 'cookie';

import Error from './Error/Error';
import TopBar from './TopBar/TopBar';
import Forum from './Forum/Forum';
import PostWindow from './PostWindow/PostWindow';
import LoginForm from './LoginForm/LoginForm';

class UpdateBlocker extends React.Component<{ children: (href: string) => React.ReactNode }> {
	private locationHref = location.href.replace(/\/$/, '');

	public shouldComponentUpdate() {
		const newLocation = location.href.replace(/\/$/, '');
		if (this.locationHref !== newLocation) {
			this.locationHref = newLocation;
			return true;
		}
		return false;
	}

	public render() {
		return this.props.children(this.locationHref);
	}
}

const checkLoginStatus = () => {
	if (!document.cookie) return false;
	const cookies = parseCookie(document.cookie);
	return cookies.logged_in === 'true' ? true : false;
};

export const LoginStatusContext = React.createContext(false);

// tslint:disable-next-line: arrow-return-shorthand
const App = () => {
	return (
		<BrowserRouter>
			<UpdateBlocker>
				{_locationHref => // tslint:disable-line:variable-name
					<LoginStatusContext.Provider value={checkLoginStatus()}>
						<div id='app'>
							<TopBar />
							<Switch>
								<Redirect exact from='/' to='/r/Popular' />
								<Route component={PostWindow} path='/r/:subforumName/:postID' />
								<Route component={Forum} path='/r/:subforumName' />
								<Route component={LoginForm} path='/login' />
								<Route component={Error} />
							</Switch>
						</div>
					</LoginStatusContext.Provider>}
			</UpdateBlocker>
		</BrowserRouter>
	);
};
export default React.memo(App);
