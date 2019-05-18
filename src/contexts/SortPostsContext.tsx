import * as React from 'react';

interface ISortPostsContext {
	postsOrder: 'latest' | 'oldest' | 'hot' | 'top';
	setOrder: React.Dispatch<React.SetStateAction<string>>;
}

const SortPostsContext = React.createContext<ISortPostsContext>({
	postsOrder: 'latest',
	setOrder: () => ({})
});

export default SortPostsContext;
