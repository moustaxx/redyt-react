import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { ISubforum } from 'components/Forum/Forum.apollo';
import communityDetailsStyles from './CommunityDetails.style';
import AsideChild from '../AsideChild/AsideChild';
import Button from 'Components/UI/Button/Button';

interface ICommunityDetailsProps extends RouteComponentProps<{ subforumName: string }> {
	subforum: ISubforum;
}
const CommunityDetails = (props: ICommunityDetailsProps) => {
	const classes = communityDetailsStyles();
	const subforumName = props.match.params.subforumName;

	const { name, description } = props.subforum;
	return (
		<div>
			<AsideChild>
				<div className='componentName'>Community Details</div>
				<div className={classes.cnt}>
					<div className={classes.subForumName}>{name}</div>
					<div className={classes.stats}>
						<div className={classes.subs}>
							<p>8.2k</p>
							<p>subscribers</p>
						</div>
						<div className={classes.online}>
							<p>9</p>
							<p>online</p>
						</div>
					</div>
					<div className={classes.description}>{description}</div>
					<Button className={classes.btn}>SUBSCRIBE</Button>
					<Link to={'/r/' + subforumName + '/submit'}><Button className={classes.btn}>CREATE POST</Button></Link>
				</div>
			</AsideChild>
		</div>
	);
};

export default withRouter(CommunityDetails);
