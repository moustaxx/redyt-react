import * as React from 'react';
import { SortButton, StyledDropDown } from './SortMenu.style';
import { MdArrowDropDown, MdWhatshot, MdAllInclusive, MdArrowDownward, MdArrowUpward } from 'react-icons/md';

const SortMenu = () => {

	const [isSortOpen, setSortOpen] = React.useState(false);

	const showSortMenu = () => {
		setSortOpen(!isSortOpen);
	};

	return (
		<>
			<SortButton onClick={showSortMenu}>
				<span>Sort</span>
				<span className='slide'>HOT</span>
				<MdArrowDropDown />
			</SortButton>
			{isSortOpen ?
				<StyledDropDown>
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
				</StyledDropDown>
			: null}
		</>
	);
};

export default SortMenu;
