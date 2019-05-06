import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Link } from 'react-router-dom';

import { GET_SESSION_OWNER, IUserRes } from './SettingsView.apollo';

import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import settingsViewStyles from './SettingsView.style';
import Error from 'Components/Views/Error/Error';

const SettingsView = (props: { userName: string }) => {
	const classes = settingsViewStyles();

	const { data, loading, error } = useQuery<IUserRes>(GET_SESSION_OWNER);
	if (loading) return <LoadingAnim />;
	if (error) return <Error message={'User not found!'} />;
	if (!data) return null;

	const { name } = data.getSessionOwner;

	return (
		<div className={classes.root}>
			<div>
				<div className={classes.header}>
					<div className={classes.cnt}>
						<div className={classes.avatar}>{name[0]}</div>
						<div className={classes.heading}><Link to={'/user/' + name}>{name}</Link></div>
					</div>
				</div>
				<div className={classes.content}>
					<div className='caption'>Settings</div>
					<div className='nothing'>Nothing to show...</div>
				</div>
			</div>
		</div>
	);
};
export default SettingsView;
