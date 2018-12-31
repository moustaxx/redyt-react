import * as React from 'react';
import styled from 'Theme/';
import { Query } from 'react-apollo';

import Posts from './Posts/Posts';
import Aside from './Aside/Aside';
import SubforumHead from './SubforumHead/SubforumHead';
import Error from 'Components/Error/Error';
import { GET_SUBFORUM, IGetSubforumRes } from './Forum.apollo';
import LoadingAnim from 'Components/Shared/LoadingAnim/LoadingAnim';

const StyledForum = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 50px);
	overflow: auto;
	@media screen and (max-width: 800px) {
		margin: 25px 0;
	}
	.nothingToShow {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
		font-size: 24px;
	}
`;

const Cnt = styled.div`
	display: inline-flex;
	margin: 5px 0;
`;

interface IForumProps {
	match: {
		params: {
			subforumName: string;
		}
	};
	location: {
		pathname: string;
	};
}

class Forum extends React.Component<IForumProps> {
	public render() {
		const subforumName = this.props.match.params.subforumName;
		return (
			<Query<IGetSubforumRes> query={GET_SUBFORUM} variables={{name: subforumName}}>{
				({loading, error, data}) => {
					if (loading) return <LoadingAnim />;
					if (error || !data) return <Error path={this.props.location.pathname}/>;
					return (
						<StyledForum>
							<SubforumHead subforumName={data.getSubforum.name}/>
							<Cnt>
								<Aside subforum={data.getSubforum}/>
								<Posts subforum={data.getSubforum}/>
							</Cnt>
						</StyledForum>
					);
				}
			}
			</Query>
		);
	}
}
export default Forum;
