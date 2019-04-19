import * as React from 'react';
import dropDownStyles from './DropDown.style';

type TDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const DropDown = ({ className, ...props }: TDiv) => {
	const classes = dropDownStyles();
	return (
		<div
			className={
				classes.root +
				(className ? (' ' + className) : '')
			}
			{...props}
		/>
	);
};

export default DropDown;
