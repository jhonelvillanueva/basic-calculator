import './App.css';
import React, { useReducer } from 'react';
import { reducer } from './state/reducer';
import Display from './components/Display';
import Button from './components/Button';

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
	maximumFractionDigits: 0,
});

const format = (operand) => {
	if (!operand) return;
	const [integer, decimal] = operand.split('.');
	if (decimal == null) return INTEGER_FORMATTER.format(integer);
	return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

const App = () => {
	const [{ currentVal, prevVal, operation }, dispatch] = useReducer(reducer, {
		currentVal: '',
		prevVal: '',
		operation: '',
	});

	return (
		<div className='App'>
			<Display
				currentVal={currentVal}
				prevVal={prevVal}
				operation={operation}
				format={format}
			/>
			<Button dispatch={dispatch} />
		</div>
	);
};

export default App;
