import * as React from 'react';
import withApollo, { WithApolloClient } from 'react-apollo/withApollo';
import { StyledLoginForm, Heading, Input, Button } from './LoginForm.style';
import { VERIFY_LOGIN, ILoginRes } from './LoginForm.apollo';

// interface ILoginFormProps {
// }

interface ILoginFormState {
	usernameInput: string;
	passwordInput: string;
	error: boolean;
	loading: boolean;
	success: boolean;
}

class LoginForm extends React.Component<WithApolloClient<{}>, ILoginFormState> {
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
			// location.reload();
		} catch (err) {
			this.setState({ error: true });
			console.error('Login error! Wrong username or password!');
		} finally {
			this.setState({ loading: false });
		}
	}

	public render() {
		return (
			<StyledLoginForm>
				<div className='window'>
					<div className='xButton'>
						<svg width='17' fill='grey' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<polygon fill='inherit'
								points='11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5
								1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495
								18.264 18.262 16.497'>
							</polygon>
						</svg>
					</div>
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
						{this.state.loading ? <div className='comunicate'>Loading...</div> : null}
						{this.state.success ? <div className='comunicate'>Success!!!</div> : null}
					</div>
				</div>
			</StyledLoginForm>
		);
	}
}
export default withApollo(LoginForm);
