import * as React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useApolloClient } from 'react-apollo-hooks';

import { LOG_OUT, IUserRes } from './UserDropDown.apollo';
import { LoginStatusContext } from 'Components/App';
import { SetThemeContext } from '../../../../index';
import dropDownStyles from './UserDropDown.style';

import { MdAccountBox, MdSettings, MdWbSunny, MdPowerSettingsNew } from 'react-icons/md';
import DropDown from 'Components/UI/DropDown/DropDown';

interface IUserDropDown {
	username: string;
}

const UserDropDown = ({ username }: IUserDropDown) => {
	const classes = dropDownStyles();

	const setTheme = React.useContext(SetThemeContext);
	const { setLoginStatus } = React.useContext(LoginStatusContext);
	const logOut = useMutation<IUserRes>(LOG_OUT);
	const client = useApolloClient();

	const handleLogOut = async () => {
		await logOut();
		setLoginStatus(false);
		await client.resetStore();
	};

	return (
		<DropDown className={classes.root}>
			<div className={classes.heading}>Me</div>
			<Link to={'/user/' + username}>
				<MdAccountBox />
				<span>My profile</span>
			</Link>
			<Link to={'/settings'}>
				<MdSettings />
				<span>User Settings</span>
			</Link>

			<div className={classes.heading}>View settings</div>
			<a onClick={() => setTheme('toggle') /* tslint:disable-line: jsx-no-lambda */}>
				<MdWbSunny />
				<span>Dark mode</span>
			</a>
			<a onClick={handleLogOut}>
				<MdPowerSettingsNew />
				<span>Log out</span>
			</a>

		</DropDown>
	);
};

export default UserDropDown;
