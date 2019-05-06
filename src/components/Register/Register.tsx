import * as React from 'react';
import { useMutation } from 'react-apollo-hooks';

import registerStyles from './Register.style';
import { IRegisterRes, CREATE_USER } from './Register.apollo';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import XButton from 'Components/UI/Svgs/XButton';
import Button from 'Components/UI/Button/Button';
import TextBox from 'Components/UI/TextBox/TextBox';

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


	const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();

	const classes = registerStyles();

	return (
		<div className={classes.root} onClick={props.closeForm}>
			<div className={classes.window} onClick={stopPropagation}>
				<div className={classes.xButton} onClick={props.closeForm}><XButton /></div>
				<div className={classes.content}>
					<div className={classes.heading}>Create account</div>
					{!loading && !success ?
						<form onSubmit={handleSubmit}>
							{GQLErrors ?
								<div className={classes.error}>{GQLErrors.message}</div>
							: null }
							{passwordsNotIdentical ?
								<div className={classes.error}>Passwords are not identical!</div> : null }
							<TextBox wide
								value={user.name} onChange={handleChange} required
								type='text' name='name' placeholder='Username' autoComplete='username' />
							<TextBox wide
								value={user.email} onChange={handleChange} required
								type='text' name='email' placeholder='Email' autoComplete='email' />
							<TextBox wide
								value={user.password} onChange={handleChange} required
								type='password' name='password' placeholder='Password' autoComplete='password' />
							<TextBox wide
								value={user.confirmPassword} onChange={handleChange} required
								type='password' name='confirmPassword' placeholder='Confirm password' autoComplete='confirm-pass' />
							<input className={classes.checkbox} type='checkbox' required/>
							<span className={classes.agreement}>I accept Terms of Use & Privacy Policy.</span>
							<Button popup>Sign up</Button>
						</form>
					: null}
					{loading && <LoadingAnim />}
				</div>
			</div>
		</div>
	);
};

export default Register;
