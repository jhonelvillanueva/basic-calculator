import React from 'react';
import './Display.css';

const Display = ({ currentVal, prevVal, operation, format }) => {
	return (
		<>
			<div className='display-container'>
				<div className='display-small'>
					{format(prevVal)}
					{operation}
				</div>
				<div className='display-big'>{format(currentVal) || '0'}</div>
			</div>
		</>
	);
};

export default Display;
