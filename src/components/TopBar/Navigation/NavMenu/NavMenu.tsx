import * as React from 'react';
import { Link } from 'react-router-dom';
import navMenuStyles from './NavMenu.style';
import { MdHome, MdTrendingUp, MdExtension } from 'react-icons/md';

import DropDown from 'Components/UI/DropDown/DropDown';

interface INavMenu {
	onClick: (e: any) => void;
}

const NavMenu = (_: INavMenu) => {
	const classes = navMenuStyles();
	return (
		<DropDown navigation>
			<div className={classes.heading}>Redyt feeds</div>
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
		</DropDown>
	);
};

export default NavMenu;
