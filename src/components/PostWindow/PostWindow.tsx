import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';

import Header from './Header/Header';
import Left from './Left/Left';
import Aside from 'Components/Forum/Aside/Aside';
import { Content, Container, StyledPostWindow } from './PostWindow.style';
import { GET_POST, IGetPostRes } from './PostWindow.apollo';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';

interface IPostWindowProps extends RouteComponentProps<{ postID: string }> {}

const PostWindow = (props: IPostWindowProps) => {
	const postID = props.match.params.postID;

	const { data, error, loading } = useQuery<IGetPostRes>(GET_POST, { variables: { postID } });
	if (loading) return <LoadingAnim />;
	if (error || !data) return <span className='warn'>{error ? error.message : null}</span>;

	return (
		<StyledPostWindow>
			return (
				<Content>
					<Header postTitle={data.getPostByID.title} subforumName={data.getPostByID.subforum.name} />
					<Container>
						<Left post={data.getPostByID}/>
						<Aside subforum={data.getPostByID.subforum}/>
					</Container>
				</Content>
			);
		</StyledPostWindow >
	);
};

export default withRouter(PostWindow);
