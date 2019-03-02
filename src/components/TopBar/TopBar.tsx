import * as React from 'react';
import { Portal } from 'react-portal';

import { StyledTopBar, Button, Button2 } from './TopBar.style';

const LoginForm = React.lazy(() => import('Components/LoginForm/LoginForm'));
const Register = React.lazy(() => import('Components/Register/Register'));

import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import Navigation from './Navigation/Navigation';
import UserArea from './UserArea/UserArea';
import { LoginStatusContext } from 'Components/App';

// tslint:disable-next-line:no-empty-interface
interface ITopBarProps { }

interface ITopBarState {
	isLoginFormOpen: boolean;
	isRegisterOpen: boolean;
}

class TopBar extends React.Component<ITopBarProps, ITopBarState> {
	public state = {
		isLoginFormOpen: false,
		isRegisterOpen: false
	};

	protected closeForm = () => {
		this.setState(() => ({ isLoginFormOpen: false, isRegisterOpen: false }));
	}

	public render() {
		return (
			<StyledTopBar>
				<LoginStatusContext.Consumer>{loginStatus => (
					<>
						<Logo />
						<Navigation />
						<SearchBox />
						{loginStatus === true ? <UserArea /> : (
							<React.Suspense fallback={null}>
								<Button onClick={() => this.setState(() => ({ isLoginFormOpen: true }))}>
									Log in
								</Button>
								<Button2 onClick={() => this.setState(() => ({ isRegisterOpen: true }))}>
									Sign up
								</Button2>
								{this.state.isLoginFormOpen ?
									<Portal>
										<LoginForm closeForm={this.closeForm} />
									</Portal>
									: null}
								{this.state.isRegisterOpen ?
									<Portal>
										<Register closeForm={this.closeForm} />
									</Portal>
									: null}
							</React.Suspense>
						)}
					</>
				)}</LoginStatusContext.Consumer>
			</StyledTopBar>
		);
	}
}
export default TopBar;
