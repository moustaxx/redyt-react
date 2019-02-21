import * as React from 'react';
import { Query } from 'react-apollo';
import { MdArrowDropDown, MdAccountBox } from 'react-icons/md';
import { withRouter, RouteComponentProps } from 'react-router';

import { StyledNavigation, NavIcon, SubforumName, ClickOutside } from './Navigation.style';

import SubforumIcon from 'Components/UI/Svgs/SubforumIcon';
import { IGetSubforumRes, GET_SUBFORUM } from './Navigation.apollo';
import NavMenu from './NavMenu/NavMenu';

const Navigation = (props: RouteComponentProps) => {
	const splitedPath = props.location.pathname.split('/');
	const dispatcher = splitedPath[1];
	const name = splitedPath[2];
	const [isNavMenuOpen, setNavStatus] = React.useState(false);
	return (
		<StyledNavigation className={`${isNavMenuOpen ? 'active' : ''}`}>
			<div className='cnt' onClick={() => setNavStatus(!isNavMenuOpen)}>
				<div className='cnt2'>

					{dispatcher === 'r' ?
						<Query<IGetSubforumRes> query={GET_SUBFORUM} variables={{ name }}>{
							({ loading, error, data }) => {
								
								if (loading || !data || error) return (
									<NavIcon><SubforumIcon /></NavIcon>
								);
								return (
									<>
										<NavIcon><SubforumIcon /></NavIcon>
										<SubforumName>{data.getSubforum.name}</SubforumName>
									</>
								);
							}
						}
						</Query>
					: null}

					{dispatcher === 'user' ?
						<>
							<NavIcon><MdAccountBox /></NavIcon>
							<SubforumName>{name}</SubforumName>
						</>
					: null}

				</div>
				<MdArrowDropDown size={20} />
			</div>
			{isNavMenuOpen ? <>
				<ClickOutside onClick={() => setNavStatus(false)}/>
				<NavMenu onClick={(e: Event) => e.stopPropagation()}/>
			</> : null}
			{/* <Navigation /> */}
		</StyledNavigation>
	);
};

export default withRouter(Navigation);
