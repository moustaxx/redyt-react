import * as React from 'react';
import Vote from 'Components/UI/Vote/Vote';
import { StyledHeader, ExitButton } from './Header.style';
import XButton from 'Components/UI/Svgs/XButton';

interface IHeaderProps {
	postTitle: string;
}

const Header = (props: IHeaderProps) => {
	const postTitle = props.postTitle;
	return (
		<StyledHeader>
			<div className='group'>
				<Vote className='voteHere'/>
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
