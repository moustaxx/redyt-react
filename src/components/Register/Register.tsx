import * as React from 'react';
import { useMutation } from 'react-apollo-hooks';

import { StyledRegister, Heading, Button, Input, Checkbox, Agreement } from './Register.style';
import { IRegisterRes, CREATE_USER } from './Register.apollo';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import XButton from 'Components/UI/Svgs/XButton';

interface IRegisterFormProps {
	closeForm: () => void;
}

const Register = (props: IRegisterFormProps) => {
	const [user, setUser] = React.useState({
		name: '',
		password: '',
		confirmPassword: '',
		email: '',
	});

	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const [GQLErrors, setGQLErrors] = React.useState<Error | null>(null);
	const [passwordsNotIdentical, setPasswordsNotIdentical] = React.useState(false);


	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setUser({
			...user,
			[name]: value
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setGQLErrors(null);
		setPasswordsNotIdentical(false);
		if (!isPasswordsIdentical()) return setPasswordsNotIdentical(true);
		setLoading(true);
		const res = await createUser().catch( (err: Error) => setGQLErrors(err));
		console.log('res:', res);
		setLoading(false);
		if (res) {
			setSuccess(true);
			location.reload();
		}
	};

	const isPasswordsIdentical = () => {
		if (user.password === user.confirmPassword) return true;
		return false;
	};

	const createUser = useMutation<IRegisterRes>(CREATE_USER, {
		variables: { name: user.name, password: user.password, email: user.email },
	});

	return (
		<StyledRegister onClick={() => props.closeForm()}>
			<div className='window' onClick={e => e.stopPropagation()}>
				<div className='xButton' onClick={() => props.closeForm()}><XButton /></div>
				<div className='content'>
					<Heading>Create account</Heading>
					{!loading && !success ?
						<form onSubmit={handleSubmit}>
							{GQLErrors ?
								<div className='error'>{GQLErrors.message}</div>
							: null }
							{passwordsNotIdentical ?
								<div className='error'>Passwords are not identical!</div> : null }
							<Input
								value={user.name} onChange={handleChange} required
								type='text' name='name' placeholder='Username' autoComplete='username' />
							<Input
								value={user.email} onChange={handleChange} required
								type='text' name='email' placeholder='Email' autoComplete='email' />
							<Input
								value={user.password} onChange={handleChange} required
								type='password' name='password' placeholder='Password' autoComplete='password' />
							<Input
								value={user.confirmPassword} onChange={handleChange} required
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
};

export default Register;
