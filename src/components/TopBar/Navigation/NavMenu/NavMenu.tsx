import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavMenu } from './NavMenu.style';

interface INavMenu {
	onClick: (e: any) => void;
}

// tslint:disable-next-line: arrow-return-shorthand
const NavMenu = (_: INavMenu) => {
	return (
		<StyledNavMenu>
			<div className='content'>
				<input className='filter' placeholder='Filter' />
				<div className='feedsCaption'>REDYT FEEDS</div>
				<Link to={'/'}>Home</Link>
				<Link to={'/r/Popular'}>Popular</Link>
				<Link to={'/r/MaterialDesign'}>Material Design</Link>
			</div>
		</StyledNavMenu>
	);
};

export default NavMenu;
