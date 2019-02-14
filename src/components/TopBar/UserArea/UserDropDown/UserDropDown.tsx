import * as React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountBox, MdSettings, MdWbSunny, MdPowerSettingsNew } from 'react-icons/md';
import { StyledDropDown } from './UserDropDown.style';

const UserDropDown = () => {
	return (
		<StyledDropDown>
			<div className='heading'>Me</div>
			<Link to={'/'}>
				<MdAccountBox />
				<span>My profile</span>
			</Link>
			<Link to={'/'}>
				<MdSettings />
				<span>User Settings</span>
			</Link>
			<div className='heading'>View settings</div>
			<Link to={'/'}>
				<MdWbSunny />
				<span>Dark mode</span>
			</Link>
			<Link to={'/'}>
				<MdPowerSettingsNew />
				<span>Log out</span>
			</Link>
		</StyledDropDown>
	);
};

export default UserDropDown;
