import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { RouteComponentProps, Switch, Route } from 'react-router';

const Posts = React.lazy(() => import('./Posts/Posts'));
const Aside = React.lazy(() => import('./Aside/Aside'));

import SortContext from 'Src/contexts/SortContext';
import ThemeContext from 'Src/contexts/ThemeContext';

import { GET_SUBFORUM, IGetSubforumRes } from './Forum.apollo';
import forumStyles from './Forum.style';

import SubforumHead from './SubforumHead/SubforumHead';
import PostView from './PostView/PostView';
import Error from 'Components/Views/Error/Error';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import CreatePost from 'Components/Forum/CreatePost/CreatePost';

interface IForumProps extends RouteComponentProps<{ subforumName: string }> {
	children?: JSX.Element;
}

const Forum = (props: IForumProps) => {
	const { subforumName } = props.match.params;

	const classes = forumStyles();
	const themeDispatch = React.useContext(ThemeContext);
	const [postsOrder, setPostsOrder] = React.useState();
	const [commentsOrder, setCommentsOrder] = React.useState();

	const sortCtx = React.useMemo(
		() => ({
			postsOrder,
			commentsOrder,
			setPostsOrder,
			setCommentsOrder
		}),
		[postsOrder, commentsOrder]
	);

	const { data, error, loading } = useQuery<IGetSubforumRes>(GET_SUBFORUM, { variables: { name: subforumName } });
	if (loading) return <LoadingAnim />;
	if (error || !data) return <Error path={props.location.pathname} />;
	themeDispatch({ type: 'overwrite', payload: data.getSubforum.colors });

	return (
		<SortContext.Provider value={sortCtx}>
			<div className={classes.root}>
				<SubforumHead subforumName={data.getSubforum.name} />
				<div className={classes.content}>
					<React.Suspense fallback={null}>
						<Aside subforum={data.getSubforum} style={{ marginLeft: 0 }} />
					</React.Suspense>
					<Switch>
						<Route render={p => ( /* tslint:disable-next-line: jsx-no-lambda */
							<CreatePost subforumName={subforumName} subforumID={data.getSubforum.id} {...p} />
						)} path='/r/:subforumName/submit' exact />
						<Route component={PostView} path='/r/:subforumName/:postID' />
						<Route render={p => ( /* tslint:disable-next-line: jsx-no-lambda */
							<React.Suspense fallback={null}>
								<Posts subforum={data.getSubforum} {...p} />
							</React.Suspense>
						)} path='/r/:subforumName' />
					</Switch>
				</div>
			</div>
		</SortContext.Provider>
	);
};

export default React.memo(Forum);
