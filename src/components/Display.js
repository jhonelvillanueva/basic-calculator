import React from 'react';
import './Display.css';

const Display = ({ display }) => {
	return (
		<>
			<div className='display-container'>
				<div className='display-small'></div>
				<div className='display-big'>{display}</div>
			</div>
		</>
	);
};

export default Display;
