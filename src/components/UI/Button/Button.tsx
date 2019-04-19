import * as React from 'react';
import buttonStyles from './Button.style';

type TButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface IButtonProps extends TButton {
	secondary?: boolean;
}

const Button = ({ className, secondary, ...props}: IButtonProps) => {
	const classes = buttonStyles();
	return (
		<button
			className={
				classes.root +
				(secondary ? (' ' + classes.secondary) : '') +
				(className ? (' ' + className) : '')
			}
			{...props}
		/>
	);
};

export default Button;
