import * as React from 'react';

import Header from './Header/Header';
import Settings from './Settings/Settings';
import Bookmarks from './Bookmarks/Bookmarks';

interface ISubforumHeadProps {
	subforumName: string;
}

const Head = (props: ISubforumHeadProps) => {
	return (
		<div style={{width: '100%'}}>
			<Header subforumName={props.subforumName}/>
			<Bookmarks />
			<Settings />
		</div >
	);
};

export default Head;
