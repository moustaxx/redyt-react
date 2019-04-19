import * as React from 'react';
import { MdArrowDropDown, MdWhatshot, MdAllInclusive, MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import sortMenuStyles from './SortMenu.style';
import DropDown from 'Components/UI/DropDown/DropDown';

const SortMenu = () => {

	const classes = sortMenuStyles();
	const [isSortOpen, setSortOpen] = React.useState(false);

	const showSortMenu = () => {
		setSortOpen(!isSortOpen);
	};

	return (
		<>
			<button className={classes.sortBtn} onClick={showSortMenu}>
				<span>Sort</span>
				<span className='slide'>HOT</span>
				<MdArrowDropDown />
			</button>
			{isSortOpen ?
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
			: null}
		</>
	);
};

export default SortMenu;
