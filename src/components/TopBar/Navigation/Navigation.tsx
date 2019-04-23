import * as React from 'react';
import { Query } from 'react-apollo';
import { MdArrowDropDown, MdAccountBox } from 'react-icons/md';
import { withRouter, RouteComponentProps } from 'react-router';
import clsx from 'clsx';

import navigationStyles from './Navigation.style';

import SubforumIcon from 'Components/UI/Svgs/SubforumIcon';
import { IGetSubforumRes, GET_SUBFORUM } from './Navigation.apollo';
import NavMenu from './NavMenu/NavMenu';

const Navigation = (props: RouteComponentProps) => {
	const splitedPath = props.location.pathname.split('/');
	const dispatcher = splitedPath[1];
	const name = splitedPath[2];

	const [isNavMenuOpen, setNavStatus] = React.useState(false);

	const toggleNavStatus = () => setNavStatus(!isNavMenuOpen);
	const stopPropagation = (e: Event) => e.stopPropagation();

	const classes = navigationStyles();

	return (
		<div className={clsx(classes.root, isNavMenuOpen && 'active')}>
			<div className={classes.cnt} onClick={toggleNavStatus}>
				<div className={classes.cnt2}>

					{dispatcher === 'r' &&
						<Query<IGetSubforumRes> query={GET_SUBFORUM} variables={{ name }}>{
							({ loading, error, data }) => {

								if (loading || !data || error) return (
									<div className={classes.navIcon}><SubforumIcon /></div>
								);
								return (
									<>
										<div className={classes.navIcon}><SubforumIcon /></div>
										<div className={classes.subforumName}>{data.getSubforum.name}</div>
									</>
								);
							}
						}
						</Query>
					}

					{dispatcher === 'user' &&
						<>
							<div className={classes.navIcon}><MdAccountBox /></div>
							<div className={classes.subforumName}>{name}</div >
						</>
					}

				</div>
				<MdArrowDropDown size={20} />
			</div>
			{isNavMenuOpen &&
				<>
					<div className={classes.clickOutside} onClick={toggleNavStatus} />
					<NavMenu onClick={stopPropagation} />
				</>
			}
		</div>
	);
};

export default withRouter(Navigation);
