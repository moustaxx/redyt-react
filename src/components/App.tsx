import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

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

const App = () => (
	<BrowserRouter>
		<UpdateBlocker>
			{_locationHref => // tslint:disable-line:variable-name
				<div id='app'>
					<TopBar />
					<Switch>
						<Redirect exact from='/' to='/r/Popular' />
						<Route component={PostWindow} path='/r/:subforumName/:postID' />
						<Route component={Forum} path='/r/:subforumName' />
						<Route component={LoginForm} path='/login' />
						<Route component={Error} />
					</Switch>
				</div>}
		</UpdateBlocker>
	</BrowserRouter>
);
export default React.memo(App);
