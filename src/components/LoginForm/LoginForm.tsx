import * as React from 'react';
import withApollo, { WithApolloClient } from 'react-apollo/withApollo';
import { StyledLoginForm, Heading, Input, Button } from './LoginForm.style';
import { VERIFY_LOGIN, ILoginRes } from './LoginForm.apollo';

import LoadingAnim from 'Components/Shared/LoadingAnim/LoadingAnim';
import XButton from 'Components/Shared/Svgs/XButton';

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

	private handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ usernameInput: event.target.value });
	}
	private handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ passwordInput: event.target.value });
	}
	private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		console.log('Login: ' + this.state.usernameInput + ' Password: ' + this.state.passwordInput);
		event.preventDefault();
		this.verifyLogin();
	}
	private verifyLogin = async () => {
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
								<Input
									value={this.state.usernameInput} onChange={this.handleUsernameChange}
									type='text' placeholder='Username' required autoComplete='username' />
								<Input
									value={this.state.passwordInput} onChange={this.handlePasswordChange}
									type='password' placeholder='Password' required autoComplete='password' />
								<Button>Log in</Button>
							</form>
						: null}
						{this.state.loading ? <LoadingAnim /> : null}
						{this.state.success ? <div className='comunicate'>Success!!!</div> : null}
					</div>
				</div>
			</StyledLoginForm>
		);
	}
}
export default withApollo(LoginForm);
