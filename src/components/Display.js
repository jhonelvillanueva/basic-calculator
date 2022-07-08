import React from 'react';
import './Display.css';

const Display = ({ formulaDisplay, computationDisplay }) => {
	return (
		<>
			<div className='display-container'>
				<div className='display-small'>{computationDisplay}</div>
				<div className='display-big'>{formulaDisplay}</div>
			</div>
		</>
	);
};

export default Display;
