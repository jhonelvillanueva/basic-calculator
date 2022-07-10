import './Button.css';
import React from 'react';
import ACTIONS from '../state/action';

const Button = ({ dispatch }) => {
	return (
		<>
			<div className='button-container'>
				<button
					className='btn grid-span-2 ac'
					onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
					AC
				</button>
				<button
					className='btn ac'
					onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
					DEL
				</button>
				<button
					className='btn operator'
					onClick={() =>
						dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: '÷' })
					}
					value='/'>
					÷
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '7' })}
					value='7'>
					7
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '8' })}
					value='8'>
					8
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '9' })}
					value='9'>
					9
				</button>
				<button
					className='btn operator'
					onClick={() =>
						dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: 'x' })
					}
					value='x'>
					X
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '4' })}
					value='4'>
					4
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '5' })}
					value='5'>
					5
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '6' })}
					value='6'>
					6
				</button>
				<button
					className='btn operator'
					onClick={() =>
						dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: '-' })
					}
					value='-'>
					-
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '1' })}
					value='1'>
					1
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '2' })}
					value='2'>
					2
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '3' })}
					value='3'>
					3
				</button>
				<button
					className='btn operator'
					onClick={() =>
						dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: '+' })
					}
					value='+'>
					+
				</button>
				<button
					className='btn num grid-span-2'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '0' })}
					value='0'>
					0
				</button>
				<button
					className='btn num'
					onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: '.' })}
					value='.'>
					.
				</button>
				<button
					className='btn operator'
					onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
					value='='>
					=
				</button>
			</div>
		</>
	);
};

export default Button;
