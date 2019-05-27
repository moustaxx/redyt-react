import * as React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useApolloClient } from 'react-apollo-hooks';
import { MdAccountBox, MdSettings, MdWbSunny, MdPowerSettingsNew } from 'react-icons/md';

import { LOG_OUT, IUserRes } from './UserDropDown.apollo';
import { LoginStatusContext } from 'Components/App';
import ThemeContext from 'Src/contexts/ThemeContext';
import dropDownStyles from './UserDropDown.style';

import DropDown from 'Components/UI/DropDown/DropDown';

interface IUserDropDown {
	username: string;
	onClick: (e: any) => void;
}

const UserDropDown = ({ username, onClick }: IUserDropDown) => {
	const classes = dropDownStyles();

	const themeDispatch = React.useContext(ThemeContext);
	const { setLoginStatus } = React.useContext(LoginStatusContext);
	const logOut = useMutation<IUserRes>(LOG_OUT);
	const client = useApolloClient();

	const handleLogOut = async () => {
		await logOut();
		setLoginStatus(false);
		await client.resetStore();
	};

	return (
		<DropDown userArea onClick={onClick}>
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
			<a onClick={() => themeDispatch({ type: 'toggle' }) /* tslint:disable-line: jsx-no-lambda */}>
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
