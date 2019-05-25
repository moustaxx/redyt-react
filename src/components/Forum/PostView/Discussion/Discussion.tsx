import * as React from 'react';
import { MdArrowDropDown, MdArrowDownward, MdArrowUpward } from 'react-icons/md';

import { IComment } from 'Components/Forum/PostView/PostView.apollo';
import discussionStyles from './Discussion.style';
import Comment from './Comment';
import AddComment from './AddComment';
import DropDown from 'Components/UI/DropDown/DropDown';
import ClickOutside from 'Components/UI/ClickOutside/ClickOutside';
import SortContext from 'Src/contexts/SortContext';

interface IDiscussionProps {
	comments: IComment[];
}

const Discussion = ({ comments }: IDiscussionProps) => {
	const classes = discussionStyles();
	
	const { setCommentsOrder } = React.useContext(SortContext);
	const [isSortOpen, setSortOpen] = React.useState(false);
	const [choice, setChoice] = React.useState<string>('latest');
	const stopPropagation = (e: Event) => e.stopPropagation();

	const showSortMenu = () => {
		setSortOpen(!isSortOpen);
	};

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		setChoice(e.currentTarget.dataset.name!);
		setCommentsOrder(e.currentTarget.dataset.name!);
		console.log('zmiana: ' + e.currentTarget.dataset.name!);
	};

	return (
		<section id='comments' className={classes.root}>
			<AddComment />
			{comments.length ?
				<div>
					<button className={classes.sortBtn} onClick={showSortMenu}>
						<span>Sort by </span>
						<span className={classes.choice}>{choice}</span>
						<MdArrowDropDown />
					</button>
					{isSortOpen &&
						<>
						<DropDown slim className={classes.dropDown} onClick={stopPropagation}>
								<li onClick={handleClick} data-name='latest'>
									<MdArrowDownward />
									<span>Latest</span>
								</li>
								<li onClick={handleClick} data-name='oldest'>
									<MdArrowUpward />
									<span>Oldest</span>
								</li>
							</DropDown>
							<ClickOutside onClick={showSortMenu} />
						</>
					}
				</div>
			: null}
			<div>
				{comments.map(comment =>
					<Comment key={comment.id} data={comment} />
				)}
			</div>
		</section>
	);
};

export default Discussion;
