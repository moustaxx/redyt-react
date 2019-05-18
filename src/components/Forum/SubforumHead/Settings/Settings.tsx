import * as React from 'react';
import { MdArrowDropDown, MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import SortPostsContext from 'Src/contexts/SortPostsContext';

import settingsStyles from './Settings.style';
import DropDown from 'Components/UI/DropDown/DropDown';
import ClickOutside from 'Components/UI/ClickOutside/ClickOutside';

const Settings = () => {
	const classes = settingsStyles();

	const [isSortOpen, setSortOpen] = React.useState(false);
	const stopPropagation = (e: Event) => e.stopPropagation();

	const { setOrder } = React.useContext(SortPostsContext);
	const [choice, setChoice] = React.useState<string>('latest');
	
	const showSortMenu = () => {
		setSortOpen(!isSortOpen);
	};

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		setChoice(e.currentTarget.dataset.name!);
		setOrder(e.currentTarget.dataset.name!);
	};

	return (
		<div className={classes.root}>
			<button className={classes.sortBtn} onClick={showSortMenu}>
				<span>Sort by </span>
				<span className={classes.choice}>{choice}</span>
				<MdArrowDropDown />
			</button>
			{isSortOpen &&
				<>
					<DropDown slim className={classes.dropDown} onClick={stopPropagation}>
						<li onClick={handleClick} data-name='latest'>
							<MdArrowDownward />
							<span>Latest</span>
						</li>
						<li onClick={handleClick} data-name='oldest'>
							<MdArrowUpward />
							<span>Oldest</span>
						</li>
						{/* <li onClick={handleClick} data-name='hot'>
							<MdWhatshot />
							<span>Hottest</span>
						</li>
						<li onClick={handleClick} data-name='top'>
							<MdAllInclusive />
							<span>Top</span>
						</li> */}
					</DropDown>
					<ClickOutside onClick={showSortMenu} />
				</>
			}
		</div >
	);
};

export default Settings;
