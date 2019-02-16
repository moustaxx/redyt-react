import * as React from 'react';
import styled from 'Theme/';

import AsideComponent from '../AsideComponent/AsideComponent';
import { niceButton } from 'Components/UI/Button/Button';
import { ISubforum } from 'components/Forum/Forum.apollo';

const StyledCommunityDetails = styled.div`
	.subForumName {
		margin-top: 5px;
		margin-bottom: 15px;
		font-size: 18px;
	}
	.cnt {
		padding: 15px;
		.description {
			margin: 15px 0
		}
		.stats {
			display: inline-flex;
			width: 100%;
		}
			.subs {
				width: 50%;
			}
			.online {
				width: 50%;
				border-left: 1px solid #0000001c;
				padding-left: 10px;
				box-sizing: content-box;
			}
	}
`;

const Button = styled(niceButton)`
	width: 100%;
	margin: 2px 0;
`;

interface ICommunityDetailsProps {
	subforum: ISubforum;
}
class CommunityDetails extends React.Component<ICommunityDetailsProps> {
	public render() {
		const { name, description } = this.props.subforum;
		return (
			<StyledCommunityDetails>
				<AsideComponent>
					<div className='componentName'>Community Details</div>
					<div className='cnt'>
						<div className='subForumName'>r/{name}</div>
						<div className='stats'>
							<div className='subs'>
								<p>8.2k</p>
								<p>subscribers</p>
							</div>
							<div className='online'>
								<p>9</p>
								<p>online</p>
							</div>
						</div>
						<div className='description'>{description}</div>
						<Button>SUBSCRIBE</Button>
						<Button>CREATE POST</Button>
					</div>
				</AsideComponent>
			</StyledCommunityDetails>
		);
	}
}
export default CommunityDetails;
