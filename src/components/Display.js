import React from 'react';
import './Display.css';

const Display = ({ display, formula }) => {
	return (
		<>
			<div className='display-container'>
				<div className='display-small'>{formula}</div>
				<div className='display-big'>{display}</div>
			</div>
		</>
	);
};

export default Display;
