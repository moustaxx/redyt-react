import * as React from 'react';
import Vote from 'Components/Shared/Vote/Vote';
import { StyledHeader, ExitButton } from './Header.style';

interface IHeaderProps {
	postTitle: string;
}

class Header extends React.Component<IHeaderProps> {
	public render() {
		const postTitle = this.props.postTitle;
		return (
			<StyledHeader>
				<div className='group'>
					{/* <Vote className='voteHere'></Vote> */}
					<Vote />
					<div className='title'>{postTitle}</div>
					<div className='space' />
					<ExitButton>
						<svg width='15' fill='grey' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<polygon fill='inherit'
								points='11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5
								3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264
							18.262 16.497' />
						</svg>
						<span>CLOSE</span>
					</ExitButton>
				</div>
			</StyledHeader>
		);
	}
}
export default Header;
