import * as React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountBox, MdSettings, MdWbSunny, MdPowerSettingsNew } from 'react-icons/md';
import dropDownStyles from './UserDropDown.style';
import { SetThemeContext } from '../../../../index';
import DropDown from 'Components/UI/DropDown/DropDown';

interface IUserDropDown {
	username: string;
}

const UserDropDown = ({ username }: IUserDropDown) => {
	const classes = dropDownStyles();
	return (
		<DropDown className={classes.root}>
			<div className={classes.heading}>Me</div>
			<Link to={'/user/' + username}>
				<MdAccountBox />
				<span>My profile</span>
			</Link>
			<Link to={'/'}>
				<MdSettings />
				<span>User Settings</span>
			</Link>

			<div className={classes.heading}>View settings</div>
			<SetThemeContext.Consumer>
				{setTheme => (
					// tslint:disable-next-line: jsx-no-lambda
					<a onClick={() => setTheme('toggle')}>
						<MdWbSunny />
						<span>Dark mode</span>
					</a>
				)}
			</SetThemeContext.Consumer>
			<Link to={'/'}>
				<MdPowerSettingsNew />
				<span>Log out</span>
			</Link>

		</DropDown>
	);
};

export default UserDropDown;
