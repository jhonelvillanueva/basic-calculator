import './Button.css';
import React from 'react';

const Button = ({ start, handleNumber, handleOperator, handleEqual }) => {
	return (
		<>
			<div className='button-container'>
				<button className='btn grid-span-2 ac' onClick={start}>
					AC
				</button>
				<button className='btn num'>±</button>
				<button className='btn operator' onClick={handleOperator} value='/'>
					/
				</button>
				<button className='btn num' onClick={handleNumber} value='7'>
					7
				</button>
				<button className='btn num' onClick={handleNumber} value='8'>
					8
				</button>
				<button className='btn num' onClick={handleNumber} value='9'>
					9
				</button>
				<button className='btn operator' onClick={handleOperator} value='x'>
					X
				</button>
				<button className='btn num' onClick={handleNumber} value='4'>
					4
				</button>
				<button className='btn num' onClick={handleNumber} value='5'>
					5
				</button>
				<button className='btn num' onClick={handleNumber} value='6'>
					6
				</button>
				<button className='btn operator' onClick={handleOperator} value='-'>
					-
				</button>
				<button className='btn num' onClick={handleNumber} value='1'>
					1
				</button>
				<button className='btn num' onClick={handleNumber} value='2'>
					2
				</button>
				<button className='btn num' onClick={handleNumber} value='3'>
					3
				</button>
				<button className='btn operator' onClick={handleOperator} value='+'>
					+
				</button>
				<button
					className='btn num grid-span-2'
					onClick={handleNumber}
					value='0'>
					0
				</button>
				<button className='btn num' onClick={handleNumber} value='.'>
					.
				</button>
				<button className='btn operator' onClick={handleEqual} value='='>
					=
				</button>
			</div>
		</>
	);
};

export default Button;
