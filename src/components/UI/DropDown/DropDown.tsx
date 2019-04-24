import * as React from 'react';
import clsx from 'clsx';

import dropDownStyles from './DropDown.style';

type TDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const DropDown = ({ className, ...props }: TDiv) => {
	const classes = dropDownStyles();
	return (
		<div
			className={clsx(classes.root, className)}
			{...props}
		/>
	);
};

export default DropDown;
