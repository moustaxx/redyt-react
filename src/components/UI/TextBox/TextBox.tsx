import * as React from 'react';
import textBoxStyles from './TextBox.style';

type TInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextBox = ({ className, ...props }: TInput) => {
	const classes = textBoxStyles();
	return (
		<input
			className={
				classes.root +
				(className ? (' ' + className) : '')
			}
			{...props}
		/>
	);
};

export default TextBox;
