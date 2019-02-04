import * as React from 'react';
import withApollo, { WithApolloClient } from 'react-apollo/withApollo';

import { StyledRegister, Heading, Button, Input, Checkbox, Agreement } from './Register.style';
import { IRegisterRes, CREATE_USER } from './Register.apollo';
import LoadingAnim from 'Components/Shared/LoadingAnim/LoadingAnim';
import XButton from 'Components/Shared/Svgs/XButton';

interface IRegisterFormProps {
	closeForm: () => void;
}

interface IRegisterFormState {
	user: {
		name: string;
		password: string;
		confirmPassword: string;
	};
	loading: boolean;
	success: boolean;
	passwordsNotIdentical: boolean;
	GQLErrors: IGQLErrors;
}
interface IGQLErrors {
	[index: number]: Error;
}

class Register extends React.Component<WithApolloClient<IRegisterFormProps>, IRegisterFormState> {
	public state = {
		user: {
			name: '',
			password: '',
			confirmPassword: '',
			email: ''
		},
		loading: false,
		success: false,
		passwordsNotIdentical: false,
		GQLErrors: [{name: '', message: ''}]
	};

	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		const { user } = this.state;
		this.setState({
			user: {
				...user,
				[name]: value
			}
		});
	}

	private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		this.setState({ passwordsNotIdentical: false });
		event.preventDefault();
		if (this.isPasswordsIdentical()) {
			console.log('Username: ' + this.state.user.name + ' Password: ' + this.state.user.password);
			this.createUser();
		} else return false;
	}

	private isPasswordsIdentical = () => {
		if (this.state.user.password === this.state.user.confirmPassword) return true;
		else {
			this.setState({ passwordsNotIdentical: true });
			return false;
		}
	}

	private createUser = async () => {
		this.setState({ loading: true });
		const { name, password, email} = this.state.user;
		const { client } = this.props;
		try {
			const res = await client.mutate<IRegisterRes>({
				mutation: CREATE_USER,
				fetchPolicy: 'no-cache',
				variables: { name, password, email },
				errorPolicy: 'all'
			});
			if (res.errors) {
				this.setState({ GQLErrors: res.errors as any });
				throw res.errors;
			}

			this.setState({ success: true });
			location.reload();
		} catch (err) {
			console.error('Login error!', this.state.GQLErrors);
		} finally {
			this.setState({ loading: false });
		}
	}

	public render() {
		const { user, loading, success, passwordsNotIdentical, GQLErrors } = this.state;
		return (
			<StyledRegister onClick={() => this.props.closeForm()}>
				<div className='window' onClick={e => e.stopPropagation()}>
					<div className='xButton' onClick={() => this.props.closeForm()}><XButton /></div>
					<div className='content'>
						<Heading>Create account</Heading>
						{!loading && !success ?
							<form onSubmit={this.handleSubmit}>
								{GQLErrors ?
									GQLErrors.map((err, index) => <div key={index} className='error'>{err.message}</div>)
								: null }
								{passwordsNotIdentical ?
									<div className='error'>Passwords are not identical!</div> : null }
								<Input
									value={user.name} onChange={this.handleChange} required
									type='text' name='name' placeholder='Username' autoComplete='username' />
								<Input
									value={user.email} onChange={this.handleChange} required
									type='text' name='email' placeholder='Email' autoComplete='email' />
								<Input
									value={user.password} onChange={this.handleChange} required
									type='password' name='password' placeholder='Password' autoComplete='password' />
								<Input
									value={user.confirmPassword} onChange={this.handleChange} required
									type='password' name='confirmPassword' placeholder='Confirm password' autoComplete='confirm-pass' />
								<Checkbox type='checkbox' required/>
								<Agreement>I accept Terms of Use & Privacy Policy.</Agreement>
								<Button>Sign up</Button>
							</form>
						: null}
						{loading ? <LoadingAnim /> : null}
					</div>
				</div>
			</StyledRegister>
		);
	}
}

export default withApollo(Register);
