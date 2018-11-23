import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import Error from './Error/Error';
import TopBar from './TopBar/TopBar';
import Forum from './Forum/Forum';
import PostWindow from './PostWindow/PostWindow';

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

const App = () =>
	(
		<BrowserRouter>
			<UpdateBlocker>
				{locationHref =>
					<div id='app'>
						<TopBar />
						<Switch>
							<Redirect exact from='/' to='/redyt' />
							<Route component={PostWindow} path='/redyt/post' />
							<Route component={Forum} path='/redyt' />
							<Route component={Error} />
						</Switch>
					</div>}
			</UpdateBlocker>
		</BrowserRouter>
	);
export default React.memo(App);
