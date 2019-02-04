import * as React from 'react';
import Vote from 'Components/Shared/Vote/Vote';
import { StyledHeader, ExitButton } from './Header.style';
import XButton from 'Components/Shared/Svgs/XButton';

interface IHeaderProps {
	postTitle: string;
}

const Header = (props: IHeaderProps) => {
	const postTitle = props.postTitle;
	return (
		<StyledHeader>
			<div className='group'>
				{/* <Vote className='voteHere'></Vote> */}
				<Vote />
				<div className='title'>{postTitle}</div>
				<div className='space' />
				<ExitButton>
					<XButton />
					<span>CLOSE</span>
				</ExitButton>
			</div>
		</StyledHeader>
	);
};

export default Header;
