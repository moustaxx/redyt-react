import * as React from 'react';
import { Portal } from 'react-portal';

import { LoginStatusContext } from 'Components/App';
import topBarStyles from './TopBar.style';
import Button from '../UI/Button/Button';

const LoginForm = React.lazy(() => import('Components/LoginForm/LoginForm'));
const Register = React.lazy(() => import('Components/Register/Register'));

import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import Navigation from './Navigation/Navigation';
import UserArea from './UserArea/UserArea';

// interface ITopBarProps { }

const TopBar = () => {
	const classes = topBarStyles();

	const loginStatus = React.useContext(LoginStatusContext);

	const [isLoginFormOpen, setLoginFormOpen] = React.useState(false);
	const [isRegisterOpen, setRegisterOpen] = React.useState(false);

	const closeForm = () => {
		setLoginFormOpen(false);
		setRegisterOpen(false);
	};

	const OpenLoginForm = () => setLoginFormOpen(true);
	const OpenRegister = () => setRegisterOpen(true);

	return (
		<div className={classes.root}>
			<Logo />
			<Navigation />
			<SearchBox />
			{loginStatus === true ? <UserArea /> : (
				<React.Suspense fallback={null}>
					<Button className={classes.btn} onClick={OpenLoginForm}>
						Log in
					</Button>
					<Button secondary className={classes.btn} onClick={OpenRegister}>
						Sign up
					</Button>
					{isLoginFormOpen &&
						<Portal>
							<LoginForm closeForm={closeForm} />
						</Portal>
					}
					{isRegisterOpen &&
						<Portal>
							<Register closeForm={closeForm} />
						</Portal>
					}
				</React.Suspense>
			)}
		</div>
	);

};

export default TopBar;
