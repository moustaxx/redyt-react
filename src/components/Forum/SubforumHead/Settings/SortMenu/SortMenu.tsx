import * as React from 'react';
import { SortButton, Svg, StyledSortMenu } from './SortMenu.style';

interface IState {
	isSortOpen: boolean;
}

class SortMenu extends React.Component<{}, IState> {
	public state = {
		isSortOpen: false,
		selected: 0,
	};
	private showSortMenu = () => {
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
					<Svg viewBox='0 0 20 20'>
						<g><path fill='inherit' d='M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,
						9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,
						8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535'/ ></g>
					</Svg>
				</SortButton>
				{this.state.isSortOpen ?
				<StyledSortMenu>
					<ul>
						<li>Hot</li>
						<li>New</li>
						<li>Controversial</li>
						<li>Top</li>
					</ul>
				</StyledSortMenu> : null}
			</>
		);
	}
}
export default SortMenu;


