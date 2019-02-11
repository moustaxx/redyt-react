import * as React from 'react';
import { Query } from 'react-apollo';

import { StyledNavMenu, NavIcon, SubforumName } from './Navigation.style';
import { Portal } from 'react-portal';

import DropDown from 'Components/Shared/Svgs/DropDown';
import SubforumIcon from 'Components/Shared/Svgs/SubforumIcon';
import { IGetSubforumRes, GET_SUBFORUM } from './Navigation.apollo';
import NavMenu from './NavMenu/NavMenu';

// tslint:disable-next-line: arrow-return-shorthand
const Navigation = () => {
	const [isNavMenuOpen, setNavStatus] = React.useState(false);
	return (
		<StyledNavMenu className={`${isNavMenuOpen ? 'active' : null}`}>
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
			{isNavMenuOpen ?
				<Portal>
					<NavMenu />
				</Portal>
			: null}
			{/* <Navigation></Navigation> */}
		</StyledNavMenu>
	);
};

export default Navigation;
