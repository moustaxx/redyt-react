import * as React from 'react';

import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import NavMenu from './NavMenu/NavMenu';
import { StyledTopBar, Button, Button2 } from './TopBar.style';

class TopBar extends React.Component {
	public render() {
		return (
			<StyledTopBar>
				<Logo />
				<NavMenu />
				<SearchBox />
				{/* <UserArea></UserArea> */}
				<Button text='Log in' />
				<Button2 text='Sign up' />
			</StyledTopBar >
		);
	}
}
export default TopBar;
