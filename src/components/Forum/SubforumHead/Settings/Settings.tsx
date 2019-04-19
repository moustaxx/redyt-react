import * as React from 'react';
import SortMenu from './SortMenu/SortMenu';
import settingsStyles from './Settings.style';

const Settings = () => {
	const classes = settingsStyles();
	return (
		<div className={classes.root}>
			<SortMenu />
		</div >
	);
};

export default Settings;
