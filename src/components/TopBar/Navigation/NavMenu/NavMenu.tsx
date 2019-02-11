import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavMenuOpen } from './NavMenu.style';

// tslint:disable-next-line: arrow-return-shorthand
const NavMenuOpen = () => {
	return (
		<StyledNavMenuOpen>
			<div className='content'>
				<input className='filter' placeholder='Filter' />
				<div className='feedsCaption'>REDYT FEEDS</div>
				<Link to={'/'}>Home</Link>
				<Link to={'/r/Popular'}>Popular</Link>
				<Link to={'/r/MaterialDesign'}>Material Design</Link>
			</div>
		</StyledNavMenuOpen>
	);
};

export default NavMenuOpen;
