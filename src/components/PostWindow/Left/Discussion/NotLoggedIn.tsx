import * as React from 'react';
import { Portal } from 'react-portal';

import notLoggedInStyles from './NotLoggedIn.style';
import Button from 'Components/UI/Button/Button';
const LoginForm = React.lazy(() => import('Components/LoginForm/LoginForm'));
const Register = React.lazy(() => import('Components/Register/Register'));

const NotLoggedIn = () => {
	const classes = notLoggedInStyles();

	const [isLoginFormOpen, setLoginFormStatus] = React.useState(false);
	const [isRegisterOpen, setRegisterStatus] = React.useState(false);
	const closeForm = () => {
		setLoginFormStatus(false);
		setRegisterStatus(false);
	};
	return (
		<div className={classes.root}>
			<span>Log in to add a comment.</span>
			<div className={classes.cnt}>
				<Button className={classes.btn} onClick={() => setLoginFormStatus(true)}>Log in</Button>
				<Button className={classes.btn} onClick={() => setRegisterStatus(true)}>Sign up</Button>
			</div>
			{isLoginFormOpen ?
				<Portal>
					<React.Suspense fallback={null}>
						<LoginForm closeForm={closeForm} />
					</React.Suspense>
				</Portal>
				: null}
			{isRegisterOpen ?
				<Portal>
					<React.Suspense fallback={null}>
						<Register closeForm={closeForm} />
					</React.Suspense>
				</Portal>
				: null}
		</div>
	);
};

export default NotLoggedIn;
