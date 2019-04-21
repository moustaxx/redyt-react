import * as React from 'react';
import { MdArrowDropDown, MdWhatshot, MdAllInclusive, MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import settingsStyles from './Settings.style';
import DropDown from 'Components/UI/DropDown/DropDown';

const Settings = () => {
	const classes = settingsStyles();
	const [isSortOpen, setSortOpen] = React.useState(false);

	const showSortMenu = () => {
		setSortOpen(!isSortOpen);
	};

	return (
		<div className={classes.root}>
			<button className={classes.sortBtn} onClick={showSortMenu}>
				<span>Sort</span>
				<span className='slide'>HOT</span>
				<MdArrowDropDown />
			</button>
			{isSortOpen &&
				<DropDown className={classes.dropDown}>
					<li>
						<MdWhatshot />
						<span>Hottest</span>
					</li>
					<li>
						<MdArrowDownward />
						<span>Newest</span>
					</li>
					<li>
						<MdArrowUpward />
						<span>Oldest</span>
					</li>
					<li>
						<MdAllInclusive />
						<span>Top</span>
					</li>
				</DropDown>
			}
		</div >
	);
};

export default Settings;
