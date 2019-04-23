import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { IThemeInterface } from 'Theme/';

const loadingAnimStyles = makeStyles((theme: IThemeInterface) => ({
	root: {
		width: 66,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		animation: 'expand .75s ease-in-out infinite alternate',

		'& .dot': {
			width: 13,
			height: 13,
			borderRadius: '50%',
			position: 'absolute',
		},
		'& .dot.dot-a': {
			animation: '$scaleA 1.5s ease-in-out infinite',
			backgroundColor: '#f66',
			left: '0%',
		},
		'& .dot.dot-b': {
			animation: '$scaleB 1.5s ease-in-out infinite',
			backgroundColor: '#93f',
			left: '33%',
		},
		'& .dot.dot-c': {
			animation: '$scaleC 1.5s ease-in-out infinite',
			backgroundColor: '#0cf',
			left: '66%',
		},
		'& .dot.dot-d': {
			animation: '$scaleD 1.5s ease-in-out infinite',
			backgroundColor: '#0f9',
			left: '100%',
		},

	},

	'@keyframes scaleA': {
		'0%': {
			transform: 'scale(1)',
		},
		'30%': {
			transform: 'scale(1.5)',
		},
		'60%': {
			transform: 'scale(1)',
		}
	},
	'@keyframes scaleB': {
		'10%': {
			transform: 'scale(1)',
		},
		'40%': {
			transform: 'scale(1.5)',
		},
		'70%': {
			transform: 'scale(1)',
		}
	},
	'@keyframes scaleC': {
		'20%': {
			transform: 'scale(1)',
		},
		'50%': {
			transform: 'scale(1.5)',
		},
		'80%': {
			transform: 'scale(1)',
		}
	},
	'@keyframes scaleD': {
		'30%': {
			transform: 'scale(1)',
		},
		'65%': {
			transform: 'scale(1.5)',
		},
		'100%': {
			transform: 'scale(1)',
		}
	},
	'@keyframes expand': {
		from: {
			width: 66,
		},
		to: {
			width: 100,
			transform: 'translateX(-17px)',
		}
	}
}), { name: 'LoadingAnim' });


const LoadingAnim = () => {
	const classes = loadingAnimStyles();
	return (
		<div className={classes.root}>
			<div className='dot dot-a' />
			<div className='dot dot-b' />
			<div className='dot dot-c' />
			<div className='dot dot-d' />
		</div>
	);
};

export default LoadingAnim;
