import * as React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountBox, MdSettings, MdWbSunny, MdPowerSettingsNew } from 'react-icons/md';
import { StyledDropDown } from './UserDropDown.style';
import { SetThemeContext } from '../../../../index';

interface IUserDropDown {
	username: string;
}

const UserDropDown = ({ username }: IUserDropDown) => {
	return (
		<StyledDropDown>
			<div className='heading'>Me</div>
			<Link to={'/user/' + username}>
				<MdAccountBox />
				<span>My profile</span>
			</Link>
			<Link to={'/'}>
				<MdSettings />
				<span>User Settings</span>
			</Link>

			<div className='heading'>View settings</div>
			<SetThemeContext.Consumer>
				{setTheme => (
					<a onClick={() => setTheme()}>
						<MdWbSunny />
						<span>Dark mode</span>
					</a>
				)}
			</SetThemeContext.Consumer>
			<Link to={'/'}>
				<MdPowerSettingsNew />
				<span>Log out</span>
			</Link>

		</StyledDropDown>
	);
};

export default UserDropDown;
