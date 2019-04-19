import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';

import { GET_POST, IGetPostRes } from './PostWindow.apollo';
import postWindowStyles from './PostWindow.style';

import Header from './Header/Header';
import Left from './Left/Left';
import Aside from 'Components/Forum/Aside/Aside';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';

interface IPostWindowProps extends RouteComponentProps<{ postID: string }> {}

const PostWindow = (props: IPostWindowProps) => {

	const classes = postWindowStyles();
	const postID = props.match.params.postID;

	const { data, error, loading } = useQuery<IGetPostRes>(GET_POST, { variables: { postID } });
	if (loading) return <LoadingAnim />;
	if (error || !data) return <span className={classes.warn}>{error ? error.message : null}</span>;

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<Header postTitle={data.getPostByID.title} subforumName={data.getPostByID.subforum.name} />
				<div className={classes.container}>
					<Left post={data.getPostByID}/>
					<Aside subforum={data.getPostByID.subforum}/>
				</div>
			</div>
		</div >
	);
};

export default withRouter(PostWindow);
