import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { MdArrowDropDown } from 'react-icons/md';

import { GET_SESSION_OWNER, IUserRes } from './UserArea.apollo';
import { StyledUserArea, Avatar } from './UserArea.style';
import UserDropDown from './UserDropDown/UserDropDown';

const UserArea = () => {
	const [isDropDownOpen, setNavStatus] = React.useState(false);
	try {
		const { data, loading, error } = useQuery<IUserRes>(GET_SESSION_OWNER);
		if (loading) return <div>Loading...</div>;
		if (error) console.log('UserArea:', error);
		if (!data) return null;
		return (
			<StyledUserArea onClick={() => setNavStatus(!isDropDownOpen)}>
				<Avatar>{data.getSessionOwner.name[0]}</Avatar>
				<span>{data.getSessionOwner.name}</span>
				<MdArrowDropDown />
				{isDropDownOpen ? <UserDropDown username={data.getSessionOwner.name} /> : null}
			</StyledUserArea>
		);
	} catch { return null; }
};

export default UserArea;
