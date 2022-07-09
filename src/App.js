import './App.css';
import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Button from './components/Button';

const MAX_CHARACTER = 10;

const App = () => {
	const [display, setDisplay] = useState([]);
	const [formula, setFormula] = useState('');
	const [currentVal, setCurrentVal] = useState('0');
	const [prevVal, setPrevVal] = useState('');

	useEffect(() => {
		start();
	}, []);

	useEffect(() => {
		const expression = /^-?\d+\.?\d*$/;
		setDisplay((prev) => {
			if (expression.test(currentVal)) {
				return currentVal;
			} else {
				return prev;
			}
		});
		console.log(expression.test(currentVal));
		// eslint-disable-next-line
	}, [currentVal]);

	const start = () => {
		setDisplay('0');
		setFormula('');
		setCurrentVal('0');
		setPrevVal('');
	};

	const handleNumber = (e) => {
		if (currentVal.length !== MAX_CHARACTER && e.target.value === '.') {
			setCurrentVal((prev) => prev + e.target.value);
		} else if (currentVal.length !== MAX_CHARACTER && currentVal !== '0') {
			setCurrentVal((prev) => prev + e.target.value);
		} else if (currentVal.length !== MAX_CHARACTER) {
			setCurrentVal(e.target.value);
		}
	};

	const handleOperator = (e) => {
		setFormula(display + e.target.value);
		setCurrentVal('');
	};

	const handleEqual = (e) => {
		setFormula(display + e.target.value);
	};

	return (
		<div className='App'>
			<Display display={display} formula={formula} />
			<Button
				start={start}
				handleNumber={handleNumber}
				handleOperator={handleOperator}
				handleEqual={handleEqual}
			/>
		</div>
	);
};

export default App;
