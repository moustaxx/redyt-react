import * as React from 'react';
import { Query } from 'react-apollo';
import { MdArrowDropDown } from 'react-icons/md';
import { withRouter, RouteComponentProps } from 'react-router';

import { StyledNavigation, NavIcon, SubforumName, ClickOutside } from './Navigation.style';

import SubforumIcon from 'Components/UI/Svgs/SubforumIcon';
import { IGetSubforumRes, GET_SUBFORUM } from './Navigation.apollo';
import NavMenu from './NavMenu/NavMenu';

const Navigation = (props: RouteComponentProps) => {
	const url = props.location.pathname + '/';
	const regex = new RegExp(/[^\/r\/]([\w]+?)(?=\/)/);
	const matchedName = url.match(regex);
	const name = matchedName ? matchedName[0] : '';
	const [isNavMenuOpen, setNavStatus] = React.useState(false);
	return (
		<StyledNavigation className={`${isNavMenuOpen ? 'active' : ''}`}>
			<div className='cnt' onClick={() => setNavStatus(!isNavMenuOpen)}>
				<div className='cnt2'>
					<Query<IGetSubforumRes> query={GET_SUBFORUM} variables={{ name }}>{
						({ loading, error, data }) => {
							if (loading || !data) return (
								<NavIcon>
									<SubforumIcon />
								</NavIcon>
							);
							if (error) return <div>Error</div>;
							return (
								<><NavIcon>
									<SubforumIcon />
								</NavIcon>
								<SubforumName>{data.getSubforum.name}</SubforumName></>
							);
						}
					}
					</Query>
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
