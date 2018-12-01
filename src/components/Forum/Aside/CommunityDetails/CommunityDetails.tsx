import * as React from 'react';
import styled from 'Theme/';

import AsideComponent from '../AsideComponent/AsideComponent';
import { niceButton } from 'Components/Shared/Button/Button';

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


class CommunityDetails extends React.Component {
	public render() {
		return (
			<StyledCommunityDetails>
				<AsideComponent>
					<div className='componentName'>Community Details</div>
					<div className='cnt'>
						<div className='subForumName'>'r/'</div>
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
						<div className='description'>Halo halo raz raz raz dwa raz</div>
						<Button text='SUBSCRIBE'></Button>
						<Button text='CREATE POST'></Button>
					</div>
				</AsideComponent>
			</StyledCommunityDetails>
		);
	}
}
export default CommunityDetails;
