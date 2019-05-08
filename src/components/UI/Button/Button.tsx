import * as React from 'react';
import clsx from 'clsx';

import buttonStyles from './Button.style';

type TButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface IButtonProps extends TButton {
	secondary?: boolean;
	popup?: boolean;
}

const Button = ({ className, secondary, popup, ...props}: IButtonProps) => {
	const classes = buttonStyles();
	return (
		<button
			className={clsx(classes.root,
				secondary && classes.secondary,
				popup && classes.popup,
				className,
			)}
			{...props}
		/>
	);
};

export default React.memo(Button);
