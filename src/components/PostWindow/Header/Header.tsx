import * as React from 'react';
import Vote from 'Components/UI/Vote/Vote';
import { StyledHeader, ExitButton } from './Header.style';
import XButton from 'Components/UI/Svgs/XButton';
import { Link } from 'react-router-dom';

interface IHeaderProps {
	postTitle: string;
	subforumName: string;
}

const Header = (props: IHeaderProps) => {
	const postTitle = props.postTitle;
	return (
		<StyledHeader>
			<div className='group'>
				<Vote className='voteHere'/>
				<div className='title'>{postTitle}</div>
				<div className='space' />
				<Link to={'/r/' + props.subforumName}>
					<ExitButton>
						<XButton />
						<span>CLOSE</span>
					</ExitButton>
				</Link>
			</div>
		</StyledHeader>
	);
};

export default Header;
