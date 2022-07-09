import React from 'react';
import './Display.css';

const Display = ({ formula, display }) => {
	return (
		<>
			<div className='display-container'>
				<div className='display-small'>{formula || ''}</div>
				<div className='display-big'>{display || 0}</div>
			</div>
		</>
	);
};

export default Display;
