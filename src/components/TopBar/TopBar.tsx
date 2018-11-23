import * as React from 'react';
import styled from 'styled-components';

import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import NavMenu from './NavMenu/NavMenu';
import {niceButton, invertedButton} from 'Components/Shared/Button/Button';


const StyledTopBar = styled.div`
	background: ${props => props.theme.secondaryBgColor};
	position: sticky;
	top: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid ${props => props.theme.mainBgColor};
	z-index: 10;
	box-sizing: border-box;
	padding: 0 10px;
`;

const Button = styled(niceButton)`
	width: 120px;
	margin: 0 5px;
	flex-shrink: 0;
`;
const Button2 = styled(invertedButton)`
	width: 120px;
	margin: 0 5px;
	flex-shrink: 0;
`;

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
