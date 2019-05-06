import * as React from 'react';
import { useApolloClient } from 'react-apollo-hooks';
import { VERIFY_LOGIN, ILoginRes } from './LoginForm.apollo';

import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import XButton from 'Components/UI/Svgs/XButton';
import loginFormStyles from './LoginForm.style';
import TextBox from 'Components/UI/TextBox/TextBox';
import Button from 'Components/UI/Button/Button';

interface ILoginFormProps {
	closeForm: () => void;
}

const LoginForm = (props: ILoginFormProps) => {
	const [usernameInput, setUsernameInput] = React.useState('');
	const [passwordInput, setPasswordInput] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const [error, setError] = React.useState(false);
	
	const client = useApolloClient();
	
	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsernameInput(event.target.value);
	};
	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPasswordInput(event.target.value);
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		console.log('Login: ' + usernameInput + ' Password: ' + passwordInput);
		event.preventDefault();
		verifyLogin();
	};
	const verifyLogin = async () => {
		setLoading(true);
		const name = usernameInput;
		const password = passwordInput;
		try {
			const res = await client.query<ILoginRes>({
				query: VERIFY_LOGIN,
				fetchPolicy: 'no-cache',
				variables: { name, password },
				errorPolicy: 'all'
			});
			if (res.errors) throw res.errors;
			setSuccess(true);
			setTimeout(() => {
				location.reload();
			}, 200);
		} catch (err) {
			setError(true);
			console.error('Login error! Wrong username or password!');
		} finally {
			setLoading(false);
		}
	};

	const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();

	const classes = loginFormStyles();

	return (
		<div className={classes.root} onClick={props.closeForm}>
			<div className={classes.window} onClick={stopPropagation}>
				<div className={classes.xButton} onClick={props.closeForm}><XButton /></div>
				<div className={classes.content}>
					<div className={classes.heading}>Log in</div>
					{!loading && !success ?
						<form onSubmit={handleSubmit}>
							{error && <span className={classes.error}>Wrong username or password!</span> }
							<TextBox wide
								value={usernameInput} onChange={handleUsernameChange}
								type='text' placeholder='Username' required autoComplete='username' />
							<TextBox wide
								value={passwordInput} onChange={handlePasswordChange}
								type='password' placeholder='Password' required autoComplete='password' />
							<Button popup>Log in</Button>
						</form>
					: null}
					{loading && <LoadingAnim />}
				</div>
			</div>
		</div>
	);
};
export default LoginForm;
