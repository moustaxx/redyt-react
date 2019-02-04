import * as React from 'react';
import { Query } from 'react-apollo';

import Posts from './Posts/Posts';
import Aside from './Aside/Aside';
import SubforumHead from './SubforumHead/SubforumHead';
import Error from 'Components/Error/Error';
import { GET_SUBFORUM, IGetSubforumRes } from './Forum.apollo';
import LoadingAnim from 'Components/Shared/LoadingAnim/LoadingAnim';
import { StyledForum } from './Forum.style';

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
							<div className='content'>
								<Aside subforum={data.getSubforum}/>
								<Posts subforum={data.getSubforum}/>
							</div>
						</StyledForum>
					);
				}
			}
			</Query>
		);
	}
}
export default Forum;
