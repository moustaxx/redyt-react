import * as React from 'react';
import { Portal } from 'react-portal';

import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import NavMenu from './NavMenu/NavMenu';
import LoginForm from 'Components/LoginForm/LoginForm';
import Register from 'Components/Register/Register';
import { StyledTopBar, Button, Button2 } from './TopBar.style';
// import { StyledTopBar } from './TopBar.style';
// import UserArea from './UserArea/UserArea';

// tslint:disable-next-line:no-empty-interface
interface ITopBarProps {}

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
			<Logo />
			<NavMenu />
			<SearchBox />
			{/* <UserArea /> */}
			<Button onClick={() => this.setState(() => ({ isLoginFormOpen: true}))}>
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
					<Register closeForm={this.closeForm}/>
				</Portal>
			: null}
		</StyledTopBar >
	);
	}
}
export default TopBar;
