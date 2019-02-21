import * as React from 'react';

import { StyledNotLoggedIn, Button } from './NotLoggedIn.style';
import { Portal } from 'react-portal';
const LoginForm = React.lazy(() => import('Components/LoginForm/LoginForm'));
const Register = React.lazy(() => import('Components/Register/Register'));

const NotLoggedIn = () => {
	const [isLoginFormOpen, setLoginFormStatus] = React.useState(false);
	const [isRegisterOpen, setRegisterStatus] = React.useState(false);
	const closeForm = () => {
		setLoginFormStatus(false);
		setRegisterStatus(false);
	};
	return (
		<StyledNotLoggedIn>
			<span>Log in to add a comment.</span>
			<div className='cnt'>
				<Button onClick={() => setLoginFormStatus(true)}>Log in</Button>
				<Button onClick={() => setRegisterStatus(true)}>Sign up</Button>
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
		</StyledNotLoggedIn>
	);
};

export default NotLoggedIn;
