import * as React from 'react';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/styles';

const Posts = React.lazy(() => import('./Posts/Posts'));
const Aside = React.lazy(() => import('./Aside/Aside'));

import SubforumHead from './SubforumHead/SubforumHead';
import Error from 'Components/Views/Error/Error';
import { GET_SUBFORUM, IGetSubforumRes } from './Forum.apollo';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import forumStyles, { TForumStyles } from './Forum.style';

interface IForumProps extends TForumStyles {
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
		const { classes } = this.props;
		const subforumName = this.props.match.params.subforumName;
		return (
			<Query<IGetSubforumRes> query={GET_SUBFORUM} variables={{name: subforumName}}>{
				({loading, error, data}) => {
					if (loading) return <LoadingAnim />;
					if (error || !data) return <Error path={this.props.location.pathname} />;
					return (
						<div className={classes.root}>
							<SubforumHead subforumName={data.getSubforum.name} />
							<div className={classes.content}>
								<React.Suspense fallback={null}>
									<Aside subforum={data.getSubforum} style={{ marginLeft: 0 }}/>
								</React.Suspense>
								<React.Suspense fallback={null}>
									<Posts subforum={data.getSubforum} />
								</React.Suspense>
							</div>
						</div>
					);
				}
			}
			</Query>
		);
	}
}
export default withStyles(forumStyles)(Forum);
