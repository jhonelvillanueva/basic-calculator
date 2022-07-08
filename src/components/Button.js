import './Button.css';
import React from 'react';

const Button = ({ handleNumber, start }) => {
	return (
		<>
			<div className='button-container'>
				<button className='btn grid-span-2' onClick={start}>
					AC
				</button>
				<button className='btn'>±</button>
				<button className='btn'>/</button>
				<button className='btn' onClick={handleNumber} value='7'>
					7
				</button>
				<button className='btn' onClick={handleNumber} value='8'>
					8
				</button>
				<button className='btn' onClick={handleNumber} value='9'>
					9
				</button>
				<button className='btn'>X</button>
				<button className='btn' onClick={handleNumber} value='4'>
					4
				</button>
				<button className='btn' onClick={handleNumber} value='5'>
					5
				</button>
				<button className='btn' onClick={handleNumber} value='6'>
					6
				</button>
				<button className='btn'>-</button>
				<button className='btn' onClick={handleNumber} value='1'>
					1
				</button>
				<button className='btn' onClick={handleNumber} value='2'>
					2
				</button>
				<button className='btn' onClick={handleNumber} value='3'>
					3
				</button>
				<button className='btn'>+</button>
				<button className='btn grid-span-2' onClick={handleNumber} value='0'>
					0
				</button>
				<button className='btn' onClick={handleNumber} value='.'>
					.
				</button>
				<button className='btn'>=</button>
			</div>
		</>
	);
};

export default Button;
