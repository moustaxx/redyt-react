import * as React from 'react';

import { StyledNotLoggedIn, Button } from './NotLoggedIn.style';
import { Portal } from 'react-portal';
import LoginForm from 'Components/LoginForm/LoginForm';
import Register from 'Components/Register/Register';

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
					<LoginForm closeForm={closeForm} />
				</Portal>
				: null}
			{isRegisterOpen ?
				<Portal>
					<Register closeForm={closeForm} />
				</Portal>
				: null}
		</StyledNotLoggedIn>
	);
};

export default NotLoggedIn;
