import './App.css';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Display from './components/Display';
import Button from './components/Button';

const MAX_CHARACTER = 13;

const App = () => {
	const [current, setCurrent] = useState('');
	const [prevVal, setPrevVal] = useState('');
	const [formula, setFormula] = useState('');
	const [display, setDisplay] = useState('');
	const [result, setResult] = useState('');

	useEffect(() => {
		start();
	}, []);

	useEffect(() => {
		if (!result) return;

		const firstDigit = result.slice(0, result.indexOf('/[D^.]/') - 1);
		const secondDigit = result.slice(result.indexOf(/[\D^.]/));
		const operator = result.slice(
			result.indexOf(/[\D^.]/) - 1,
			result.indexOf(/[\D^.]/)
		);

		const computed = (a, b, op) => {
			if (op === '+') {
				return a + b;
			} else if (op === '-') {
				return a - b;
			} else if (op === 'x') {
				return a * b;
			} else if (op === '/') {
				return a / b;
			}
		};

		updateDisplay(
			`${computed(Number(firstDigit), Number(secondDigit), operator)}`
		);
		// eslint-disable-next-line
	}, [result]);

	useLayoutEffect(() => {
		if (!current) {
			updateDisplay(display);
		} else {
			updateDisplay(current);
		}

		// eslint-disable-next-line
	}, [current]);

	const updateDisplay = (value) => {
		if (display.length !== MAX_CHARACTER) {
			setDisplay(value);
		}
	};

	const start = () => {
		setCurrent('');
		setPrevVal('');
		setFormula('');
		setDisplay('');
		setResult('');
	};

	const handleNumber = (e) => {
		if (formula.slice(-1) === '.') return;

		updateDisplay((prev) => prev + e.target.value);
		setCurrent((prev) => prev + e.target.value);

		if (formula.slice(-1) === '=') {
			setFormula('');
		}
	};

	const handleOperator = (e) => {
		if ((!formula && !current) || (formula && formula.slice(-1) === '=')) {
			return;
		}

		setFormula(current + e.target.value);
		setCurrent('');
	};

	const handleEqual = (e) => {
		if ((!formula && !current) || (formula && formula.slice(-1) === '=')) {
			return;
		}

		setFormula(formula + current + e.target.value);
		setResult(formula + current);
		setCurrent('');
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
