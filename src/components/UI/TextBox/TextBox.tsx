import * as React from 'react';
import textBoxStyles from './TextBox.style';
import clsx from 'clsx';

type TInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextBox = ({ className, ...props }: TInput) => {
	const classes = textBoxStyles();
	return (
		<input
			className={clsx(classes.root, className)}
			{...props}
		/>
	);
};

export default TextBox;
