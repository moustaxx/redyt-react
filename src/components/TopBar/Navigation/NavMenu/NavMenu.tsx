import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledDropDown } from './NavMenu.style';

interface INavMenu {
	onClick: (e: any) => void;
}

const NavMenu = (_: INavMenu) => {
	return (
		<StyledDropDown>
			<input className='filter' placeholder='Filter' />
			<div className='heading'>Redyt feeds</div>
			<Link to={'/'}>Home</Link>
			<Link to={'/r/Popular'}>Popular</Link>
			<Link to={'/r/MaterialDesign'}>Material Design</Link>
		</StyledDropDown>
	);
};

export default NavMenu;
