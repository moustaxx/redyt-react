import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

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

const MyRouter = (props: {children: (href: string) => React.ReactNode}) => {
	return (
		<BrowserRouter>
			<UpdateBlocker>
				{locationHref => props.children(locationHref)}
			</UpdateBlocker>
		</BrowserRouter>
	);
};
export default MyRouter;
