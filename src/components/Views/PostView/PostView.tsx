import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';

import { GET_POST, IGetPostRes } from './PostView.apollo';
import postViewStyles from './PostView.style';

import PostContent from './PostContent/PostContent';
import Aside from 'Components/Forum/Aside/Aside';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';

interface IPostViewProps extends RouteComponentProps<{ postID: string }> {}

const PostView = (props: IPostViewProps) => {

	const classes = postViewStyles();
	const postID = props.match.params.postID;

	const { data, error, loading } = useQuery<IGetPostRes>(GET_POST, { variables: { postID } });
	if (loading) return <LoadingAnim />;
	if (error || !data) return <span className={classes.warn}>{error ? error.message : null}</span>;

	return (
		<div className={classes.root}>
			<PostContent post={data.getPostByID}/>
			<Aside subforum={data.getPostByID.subforum}/>
		</div >
	);
};

export default withRouter(PostView);
