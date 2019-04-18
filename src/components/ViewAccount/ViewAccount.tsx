import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withRouter, RouteComponentProps } from 'react-router';

import { GET_USER_DATA, IUserRes } from './ViewAccount.apollo';

import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import Button from 'Components/UI/Button/Button';
import viewAccountStyles from './ViewAccount.style';
import Error from 'Components/Error/Error';

const ViewAccount = (props: RouteComponentProps<{userName: string}>) => {
	const classes = viewAccountStyles();

	const name = props.match.params.userName;
	const { data, loading, error } = useQuery<IUserRes>(GET_USER_DATA, {
		variables: { name },
	});
	if (loading) return <LoadingAnim />;
	if (error) return <Error message={'User not found!'} />;
	if (!data) return null;
	return (
		<div className={classes.root}>
			<div>
				<div className={classes.header}>
					<div className={classes.cnt}>
						<div className={classes.avatar}>{data.getUserByName.name[0]}</div>
						<div className={classes.heading}>{data.getUserByName.name}</div>
					</div>
				</div>
				<div className={classes.content}>
					<div className='caption'>Latest activity</div>
					<Button className={classes.btn}>Follow</Button>
					<div className='nothing'>Nothing to show...</div>
				</div>
			</div>
		</div>
	);
};
export default withRouter(ViewAccount);
