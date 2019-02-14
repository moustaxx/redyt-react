import * as React from 'react';
import styled from 'Theme/';

// const Loading = styled.div`
//  margin: 30px auto 30px auto;
// 	width: 80px;
// 	height: 80px;
// 	animation: rotate 1.4s infinite ease-in-out,
// 	background 1.4s infinite ease-in-out alternate;

// 	@keyframes rotate {
// 		0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
// 		50% { transform: perspective(120px) rotateX(-180deg) rotateY(0deg); }
// 		100% { transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); }
// 	}
// 	@keyframes background {
// 		0% { background-color: #27ae60; }
// 		50% { background-color: #9b59b6; }
// 		100% { background-color: #c0392b; }
// 	}
// `;

const Loading = styled.div`
	.dots-loading-container {
		width: 66px;
		animation: expand .75s ease-in-out infinite alternate;
		top: 50%;
		left: 50%;
		margin-left: -33px;
		margin-top: 30px;
		position: absolute
	}
	.dot {
		width: 13px;
		height: 13px;
		border-radius: 50%;
		position: absolute;
	}
	.dot.dot-a {
		animation: scaleA 1.5s ease-in-out infinite;
		background-color: #f66;
		left: 0%
	}
	.dot.dot-b {
		animation: scaleB 1.5s ease-in-out infinite;
		background-color: #93f;
		left: 33%
	}
	.dot.dot-c {
		animation: scaleC 1.5s ease-in-out infinite;
		background-color: #0cf;
		left: 66%
	}
	.dot.dot-d {
		animation: scaleD 1.5s ease-in-out infinite;
		background-color: #0f9;
		left: 100%
	}

	@keyframes scaleA {
		0% { transform: scale(1) }
		30% { transform: scale(1.5) }
		60% { transform: scale(1) }
	}
	@keyframes scaleB {
		10% { transform: scale(1) }
		40% { transform: scale(1.5) }
		70% { transform: scale(1) }
	}
	@keyframes scaleC {
		20% { transform: scale(1) }
		50% { transform: scale(1.5) }
		80% { transform: scale(1) }
	}
	@keyframes scaleD {
		30% { transform: scale(1) }
		65% { transform: scale(1.5) }
		100% { transform: scale(1) }
	}
	@keyframes expand {
		from { width: 66px }
		to {
			width: 100px;
			transform: translateX(-17px)
		}
	}
`;


const LoadingAnim = () => (
	<Loading>
		<div className='dots-loading-container'>
			<div className='dot dot-a' />
			<div className='dot dot-b' />
			<div className='dot dot-c' />
			<div className='dot dot-d' />
		</div>
	</Loading>
);
export default LoadingAnim;
