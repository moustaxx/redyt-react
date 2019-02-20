import * as React from 'react';
import withApollo, { WithApolloClient } from 'react-apollo/withApollo';
import { StyledLoginForm, Heading, StyledTextBox, Button } from './LoginForm.style';
import { VERIFY_LOGIN, ILoginRes } from './LoginForm.apollo';

import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import XButton from 'Components/UI/Svgs/XButton';

interface ILoginFormProps {
	closeForm: () => void;
}

interface ILoginFormState {
	usernameInput: string;
	passwordInput: string;
	error: boolean;
	loading: boolean;
	success: boolean;
}

class LoginForm extends React.Component<WithApolloClient<ILoginFormProps>, ILoginFormState> {
	public state = {
		usernameInput: '',
		passwordInput: '',
		error: false,
		loading: false,
		success: false,
	};

	private readonly handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ usernameInput: event.target.value });
	}
	private readonly handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ passwordInput: event.target.value });
	}
	private readonly handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		console.log('Login: ' + this.state.usernameInput + ' Password: ' + this.state.passwordInput);
		event.preventDefault();
		this.verifyLogin();
	}
	private readonly verifyLogin = async () => {
		this.setState({ loading: true });
		const name = this.state.usernameInput;
		const password = this.state.passwordInput;
		const { client } = this.props;
		try {
			const res = await client.query<ILoginRes>({
				query: VERIFY_LOGIN,
				fetchPolicy: 'no-cache',
				variables: { name, password },
				errorPolicy: 'all'
			});
			if (res.errors) throw res.errors;
			this.setState({ success: true });
			setTimeout(() => {
				location.reload();
			}, 200);
		} catch (err) {
			this.setState({ error: true });
			console.error('Login error! Wrong username or password!');
		} finally {
			this.setState({ loading: false });
		}
	}
	public render() {
		return (
			<StyledLoginForm onClick={() => this.props.closeForm()}>
				<div className='window' onClick={e => e.stopPropagation()}>
					<div className='xButton' onClick={() => this.props.closeForm()}><XButton /></div>
					<div className='content'>
						<Heading>Log in</Heading>
						{!this.state.loading && !this.state.success ?
							<form onSubmit={this.handleSubmit}>
								{ this.state.error ? <span className='error'>Wrong username or password!</span> : null }
								<StyledTextBox
									value={this.state.usernameInput} onChange={this.handleUsernameChange}
									type='text' placeholder='Username' required autoComplete='username' />
								<StyledTextBox
									value={this.state.passwordInput} onChange={this.handlePasswordChange}
									type='password' placeholder='Password' required autoComplete='password' />
								<Button>Log in</Button>
							</form>
						: null}
						{this.state.loading ? <LoadingAnim /> : null}
					</div>
				</div>
			</StyledLoginForm>
		);
	}
}
export default withApollo(LoginForm);
