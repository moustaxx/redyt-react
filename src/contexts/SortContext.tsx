import * as React from 'react';

interface ISortContext {
	postsOrder: 'latest' | 'oldest' | 'hot' | 'top';
	setPostsOrder: React.Dispatch<React.SetStateAction<string>>;

	commentsOrder: 'latest' | 'oldest' | 'hot' | 'top';
	setCommentsOrder: React.Dispatch<React.SetStateAction<string>>;
}

const SortContext = React.createContext<ISortContext>({
	postsOrder: 'latest',
	setPostsOrder: () => ({}),

	commentsOrder: 'latest',
	setCommentsOrder: () => ({}),
});

export default SortContext;
