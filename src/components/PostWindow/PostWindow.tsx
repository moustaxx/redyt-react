import * as React from 'react';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';

import Header from './Header/Header';
import Left from './Left/Left';
import Aside from 'Components/Forum/Aside/Aside';
import { Content, Container, StyledPostWindow } from './PostWindow.style';
import { GET_POST, IGetPostRes } from './PostWindow.apollo';

interface IPostWindowProps extends RouteComponentProps<{ postID: string }> {

}

class PostWindow extends React.Component<IPostWindowProps> {
	public render() {
		const postID = this.props.match.params.postID;
		console.log('this.props.match', this.props.match);
		return (
			<StyledPostWindow onClick={this.closePostWindow}>
				<Query<IGetPostRes> query={GET_POST} variables={{ postID }}>{
					({ loading, error, data }) => {
						if (loading) return 'Loading...';
						if (error || !data) return <span className='warn'>
							{error ? error.message : null}
						</span>;
						return (
							<Content onClick={this.stopPropagation}>
								<Header postTitle={data.getPostByID.title} />
								<Container>
									<Left post={data.getPostByID}/>
									<Aside />
								</Container>
							</Content>
					);
					}
				}
				</Query>
			</StyledPostWindow >
		);
	}
	private closePostWindow() {
		console.log('closePostWindow');
		return <Redirect to='/somewhere/else' />;
	}
	private stopPropagation(event: any) {
		event.stopPropagation();
	}
}
export default withRouter(PostWindow);
