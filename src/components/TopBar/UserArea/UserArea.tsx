import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { MdArrowDropDown } from 'react-icons/md';

import { GET_SESSION_OWNER, IUserRes } from './UserArea.apollo';
import userAreaStyles from './UserArea.style';
import UserDropDown from './UserDropDown/UserDropDown';
import ClickOutside from 'Components/UI/ClickOutside/ClickOutside';

const UserArea = () => {
	const [isDropDownOpen, setNavStatus] = React.useState(false);

	const toggleNavStatus = () => setNavStatus(!isDropDownOpen);
	const stopPropagation = (e: Event) => e.stopPropagation();

	const classes = userAreaStyles();

	const { data, loading, error } = useQuery<IUserRes>(GET_SESSION_OWNER);
	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;
	if (!data) return null;

	return (
		<div className={classes.root} onClick={toggleNavStatus}>
			<div className={classes.avatar}>{data.getSessionOwner.name[0]}</div>
			<span>{data.getSessionOwner.name}</span>
			<MdArrowDropDown />
			{isDropDownOpen &&
				<>
					<UserDropDown username={data.getSessionOwner.name} onClick={stopPropagation} />
					<ClickOutside onClick={toggleNavStatus} />
				</>
			}
		</div>
	);
};

export default UserArea;
