import * as React from 'react';
import { SortButton, StyledDropDown } from './SortMenu.style';
import { MdArrowDropDown, MdWhatshot, MdAllInclusive, MdArrowDownward, MdArrowUpward } from 'react-icons/md';

interface IState {
	isSortOpen: boolean;
}

class SortMenu extends React.Component<{}, IState> {
	public state = {
		isSortOpen: false,
		selected: 0,
	};
	private readonly showSortMenu = () => {
		this.setState(prevState => ({
			isSortOpen: !prevState.isSortOpen
		}));
	}
	public render() {
		return (
			<>
				<SortButton onClick={this.showSortMenu}>
					<span>Sort</span>
					<span className='slide'>HOT</span>
					<MdArrowDropDown />
				</SortButton>
				{this.state.isSortOpen ?
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
				</StyledDropDown> : null}
			</>
		);
	}
}
export default SortMenu;


