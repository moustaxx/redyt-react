import * as React from 'react';

import AsideChild from '../AsideChild/AsideChild';
import Button from 'Components/UI/Button/Button';
import { ISubforum } from 'components/Forum/Forum.apollo';
import communityDetailsStyles from './CommunityDetails.style';

interface ICommunityDetailsProps {
	subforum: ISubforum;
}
const CommunityDetails = (props: ICommunityDetailsProps) => {
	const classes = communityDetailsStyles();

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
					<Button className={classes.btn}>CREATE POST</Button>
				</div>
			</AsideChild>
		</div>
	);
};

export default CommunityDetails;
