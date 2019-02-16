import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledDropDown } from './NavMenu.style';
import { MdHome, MdTrendingUp, MdExtension } from 'react-icons/md';

interface INavMenu {
	onClick: (e: any) => void;
}

const NavMenu = (_: INavMenu) => {
	return (
		<StyledDropDown>
			<input className='filter' placeholder='Filter' />
			<div className='heading'>Redyt feeds</div>
			<Link to={'/'}>
				<MdHome />
				<span>Home</span>
			</Link>
			<Link to={'/r/Popular'}>
				<MdTrendingUp />
				<span>Popular</span>
			</Link>
			<Link to={'/r/MaterialDesign'}>
				<MdExtension />
				<span>Material Design</span>
			</Link>
		</StyledDropDown>
	);
};

export default NavMenu;
