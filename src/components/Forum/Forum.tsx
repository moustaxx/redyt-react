import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { RouteComponentProps } from 'react-router';

const Posts = React.lazy(() => import('./Posts/Posts'));
const Aside = React.lazy(() => import('./Aside/Aside'));

import SubforumHead from './SubforumHead/SubforumHead';
import Error from 'Components/Views/Error/Error';
import { GET_SUBFORUM, IGetSubforumRes } from './Forum.apollo';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import forumStyles from './Forum.style';
import { SetThemeContext } from '../../index';

interface IForumProps extends RouteComponentProps<{ subforumName: string }> { }

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
				<React.Suspense fallback={null}>
					<Posts subforum={data.getSubforum} />
				</React.Suspense>
			</div>
		</div>
	);
};

export default React.memo(Forum);
