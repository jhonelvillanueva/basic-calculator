import './App.css';
import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Button from './components/Button';

const MAX_CHARACTER = 10;

const App = () => {
	const [formulaDisplay, setFormulaDisplay] = useState([]);
	const [computationDisplay, setComputationDisplay] = useState([]);

	useEffect(() => {
		start();
		// eslint-disable-next-lin
	}, []);

	useEffect(() => {
		setComputationDisplay(formulaDisplay.join(''));
		// eslint-disable-next-lin
	}, [formulaDisplay]);

	const start = () => {
		setFormulaDisplay([0]);
	};

	const handleNumber = (e) => {
		if (formulaDisplay.length !== MAX_CHARACTER) {
			setFormulaDisplay((prev) => [...prev, e.target.value]);
		}
	};

	console.log(formulaDisplay);

	return (
		<div className='App'>
			<Display
				formulaDisplay={formulaDisplay}
				computationDisplay={computationDisplay}
			/>
			<Button handleNumber={handleNumber} start={start} />
		</div>
	);
};

export default App;
