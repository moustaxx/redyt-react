import * as React from 'react';
import { Portal } from 'react-portal';

import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import NavMenu from './NavMenu/NavMenu';
import { StyledTopBar, Button, Button2 } from './TopBar.style';
import LoginForm from 'Components/LoginForm/LoginForm';

// tslint:disable-next-line:no-empty-interface
interface ITopBarProps {}

interface ITopBarState {
	isLoginFormOpen: boolean;
}

class TopBar extends React.Component<ITopBarProps, ITopBarState> {
	public state = {
		isLoginFormOpen: false,
	};

	protected closeLoginForm = () => {
		this.setState(() => ({ isLoginFormOpen: false }));
	}

	public render() {
	return (
		<StyledTopBar>
			<Logo />
			<NavMenu />
			<SearchBox />
			{/* <UserArea></UserArea> */}
			<Button onClick={() => this.setState(() => ({ isLoginFormOpen: true}))}>
				Log in
			</Button>
			<Button2>Sign up</Button2>
			<Portal>
				{this.state.isLoginFormOpen ? <LoginForm closeLoginForm={this.closeLoginForm} /> : null}
			</Portal>
		</StyledTopBar >
	);
	}
}
export default TopBar;
