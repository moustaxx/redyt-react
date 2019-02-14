import * as React from 'react';
import { Query } from 'react-apollo';

import { StyledNavigation, NavIcon, SubforumName, ClickOutside } from './Navigation.style';

import DropDown from 'Components/UI/Svgs/DropDown';
import SubforumIcon from 'Components/UI/Svgs/SubforumIcon';
import { IGetSubforumRes, GET_SUBFORUM } from './Navigation.apollo';
import NavMenu from './NavMenu/NavMenu';

const Navigation = () => {
	const [isNavMenuOpen, setNavStatus] = React.useState(false);
	return (
		<StyledNavigation className={`${isNavMenuOpen ? 'active' : null}`}>
			<div className='cnt' onClick={() => setNavStatus(!isNavMenuOpen)}>
				<div className='cnt2'>
					<Query<IGetSubforumRes> query={GET_SUBFORUM} variables={{ name: 'Popular' }}>{
						({ loading, error, data }) => {
							if (loading) return (
								<NavIcon>
									<SubforumIcon />
								</NavIcon>
							);
							if (error || !data) return <div>Error</div>;
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
				<DropDown />
			</div>
			{isNavMenuOpen ? <>
				<ClickOutside onClick={() => setNavStatus(false)}/>
				<NavMenu onClick={(e: Event) => e.stopPropagation()}/>
			</> : null}
			{/* <Navigation /> */}
		</StyledNavigation>
	);
};

export default Navigation;
