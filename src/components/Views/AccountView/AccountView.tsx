import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { GET_USER_DATA, IUserRes } from './AccountView.apollo';

import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import Button from 'Components/UI/Button/Button';
import accountViewStyles from './AccountView.style';
import Error from 'Components/Views/Error/Error';

const AccountView = (props: RouteComponentProps<{userName: string}>) => {
	const classes = accountViewStyles();

	const name = props.match.params.userName;
	const { data, loading, error } = useQuery<IUserRes>(GET_USER_DATA, {
		variables: { name },
	});
	if (loading) return <LoadingAnim />;
	if (error) return <Error message={'User not found!'} />;
	if (!data) return null;

	const newName = data.getUserByName.name;
	
	return (
		<div className={classes.root}>
			<div>
				<div className={classes.header}>
					<div className={classes.cnt}>
						<div className={classes.avatar}>{newName[0]}</div>
						<div className={classes.heading}><Link to={'/user/' + newName}>{newName}</Link></div>
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
export default withRouter(AccountView);
