// import styled from 'Theme/';

// export const StyledDiscussion = styled.div`
// 	width: 95%;
// 	margin: 0 auto;
// `;

// export const CommentError = styled.div`
// 	text-align: center;
// 	padding: 20px 0;
// 	font-size: 26px;
// 	color: #878a8c;
// `;

// export const AddComment = styled.div`
// 	border: 1px solid  ${props => props.theme.borderColor};
// 	border-radius: 5px;
// 	margin: 15px 5px;
// 	color: #878a8c;
// 	box-sizing: border-box;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 5px 10px;
// 	.cnt {
// 		display: flex;
// 	}
// `;

// export const SortOptions = styled.div`
// 	text-transform: uppercase;
// 	margin: 10px 10px;
// 	font-size: 14px;
// 	.sort {
// 		text-transform: uppercase;
// 		font-size: 11px;
// 		font-weight: 700;
// 		letter-spacing: 0.5px;
// 		color: ${props => props.theme.iconColor};
// 		padding: 0 10px;
// 		span, svg {
// 			display: inline;
// 			vertical-align: middle;
// 		}
// 		.slide {
// 			margin-left: 10px;
// 			color: ${props => props.theme.subforum.secondary};
// 		}
// 		svg {
// 			width: 17px;
// 			height: 17px;
// 			margin-bottom: 1px;
// 			fill: ${props => props.theme.subforum.secondary};
// 		}
// 	}
// `;
import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const discussionStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: '95%',
		margin: '0 auto',
	},
	sortOptions: {
		textTransform: 'uppercase',
		margin: '10px 10px',
		fontSize: 14,
	},
	sort: {
		textTransform: 'uppercase',
		fontSize: 11,
		fontWeight: 700,
		letterSpacing: 0.5,
		color: theme.iconColor,
		padding: '0 10px',

		'& span, svg': {
			display: 'inline',
			verticalAlign: 'middle',
		},
		'& svg': {
			width: 17,
			height: 17,
			marginBottom: 1,
			fill: theme.subforum.secondary,
		}
	},
	slide: {
		marginLeft: 10,
		color: theme.subforum.secondary,
	}
}), { name: 'Discussion'});

export default discussionStyles;
