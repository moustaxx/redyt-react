import * as React from 'react';
import Vote from 'Components/UI/Vote/Vote';
import headerStyles from './Header.style';
import XButton from 'Components/UI/Svgs/XButton';
import { Link } from 'react-router-dom';

interface IHeaderProps {
	postTitle: string;
	subforumName: string;
}

const Header = (props: IHeaderProps) => {
	const classes = headerStyles();
	const postTitle = props.postTitle;
	return (
		<div className={classes.root}>
			<div className={classes.group}>
				<Vote className={classes.voteHere}/>
				<div className={classes.title}>{postTitle}</div>
				<div className={classes.space} />
				<Link to={'/r/' + props.subforumName}>
					<div className={classes.exitButton}>
						<XButton />
						<span>CLOSE</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
