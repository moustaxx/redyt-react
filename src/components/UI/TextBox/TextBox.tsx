import * as React from 'react';
import textBoxStyles from './TextBox.style';
import clsx from 'clsx';

type TInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IInputProps extends TInput {
	wide?: boolean;
}

const TextBox = ({ className, wide, ...props }: IInputProps) => {
	const classes = textBoxStyles();
	return (
		<input
			className={clsx(classes.root, wide && classes.wide, className)}
			{...props}
		/>
	);
};

export default React.memo(TextBox);
