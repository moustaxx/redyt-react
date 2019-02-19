import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';

import { GET_USER_DATA, IUserRes } from './ViewAccount.apollo';
import Error from 'Components/Error/Error';
import LoadingAnim from 'Components/UI/LoadingAnim/LoadingAnim';
import { withRouter, RouteComponentProps } from 'react-router';
import { StyledViewAccount, Avatar, Button } from './ViewAccount.style';

const ViewAccount = (props: RouteComponentProps<{userID: string}>) => {
	const id = props.match.params.userID;
	const { data, loading, error } = useQuery<IUserRes>(GET_USER_DATA, {
		variables: { id },
	});
	if (loading) return <LoadingAnim />;
	if (error) return <Error message={'User not found!'} />;
	if (!data) return null;
	return (
		<StyledViewAccount>
			<div className='container'>
				<div className='header'>
					<div className='cnt'>
						<Avatar>R</Avatar>
						<div className='heading'>{data.getUserData.name}</div>
					</div>
				</div>
				<div className='content'>
					<div className='caption'>Latest activity</div>
					<Button>Follow</Button>
					<div className='nothing'>Nothing to show...</div>
				</div>
			</div>
		</StyledViewAccount>
	);
};
export default withRouter(ViewAccount);
