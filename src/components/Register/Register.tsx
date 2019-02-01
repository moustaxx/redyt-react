import * as React from 'react';
import withApollo, { WithApolloClient } from 'react-apollo/withApollo';

import { StyledRegister, Heading, Button, Input, Checkbox, Agreement } from './Register.style';
import { IRegisterRes, CREATE_USER } from './Register.apollo';
import LoadingAnim from 'Components/Shared/LoadingAnim/LoadingAnim';

interface IRegisterFormProps {
	closeRegister: () => void;
}

interface IRegisterFormState {
	user: {
		name: string;
		password: string;
		confirmPassword: string;
	};
	agreement: boolean;
	agreementWarning: boolean;
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
		agreement: false,
		agreementWarning: false,
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
	
	private handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;
		this.setState({ agreement: checked });
	}

	private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		this.setState({ passwordsNotIdentical: false, agreementWarning: false });
		event.preventDefault();
		if (this.state.agreement)
			if (this.isPasswordsIdentical() && this.state.agreement) {
				console.log('Username: ' + this.state.user.name + ' Password: ' + this.state.user.password);
				this.createUser();
			} else return false;
		else this.setState({ agreementWarning: true });
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
		const { user, agreementWarning, loading, success, passwordsNotIdentical, GQLErrors } = this.state;
		const XButton = () => (
			<svg width='17' fill='grey' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
				<polygon fill='inherit'
					points='11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5
					1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495
				18.264 18.262 16.497' />
			</svg>
		);
		return (
			<StyledRegister>
				<div className='window'>
					<div className='xButton'><XButton /></div>
					<div className='content'>
						<Heading>Create account</Heading>
						{!loading && !success ?
							<form onSubmit={this.handleSubmit}>
								{GQLErrors ?
									GQLErrors.map((err, index) => <div key={index} className='error'>{err.message}</div>)
								: null }
								{agreementWarning ? <div className='error'>You have to accept terms!</div> : null }
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
								<Checkbox type='checkbox' onChange={this.handleAgreementChange}/>
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
