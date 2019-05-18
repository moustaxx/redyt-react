import * as React from 'react';
import clsx from 'clsx';

import dropDownStyles from './DropDown.style';

type TDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface IDropDownProps extends TDiv {
	slim?: boolean;
}

const DropDown = ({ className, slim, ...props }: IDropDownProps) => {
	const classes = dropDownStyles();
	return (
		<div
			className={clsx(classes.root, slim && classes.slim, className)}
			{...props}
		/>
	);
};

export default DropDown;
