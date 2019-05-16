import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { RouteComponentProps, Switch, Route } from 'react-router';

const Posts = React.lazy(() => import('./Posts/Posts'));
const Aside = React.lazy(() => import('./Aside/Aside'));

import { SetThemeContext } from '../../index';
import { GET_SUBFORUM, IGetSubforumRes } from './Forum.apollo';
import forumStyles from './Forum.style';
import SubforumHead from './SubforumHead/SubforumHead';
import Error from 'Components/Views/Error/Error';
import PostView from 'Components/Views/PostView/PostView';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import CreatePost from 'Components/Forum/CreatePost/CreatePost';

interface IForumProps extends RouteComponentProps<{ subforumName: string }> {
	children?: JSX.Element;
}

const Forum = (props: IForumProps) => {
	const { subforumName } = props.match.params;
	
	const classes = forumStyles();
	const setNewTheme = React.useContext(SetThemeContext);

	const { data, error, loading } = useQuery<IGetSubforumRes>(GET_SUBFORUM, { variables: { name: subforumName } });
	if (loading) return <LoadingAnim />;
	if (error || !data) return <Error path={props.location.pathname} />;
	setNewTheme('overwrite', data.getSubforum.colors);

	return (
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
	);
};

export default React.memo(Forum);
