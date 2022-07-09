import './App.css';
import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Button from './components/Button';

const MAX_CHARACTER = 10;

const App = () => {
	const [display, setDisplay] = useState('0');
	const [currentVal, setCurrentVal] = useState('0');
	const [lastClicked, setLastClicked] = useState('');

	useEffect(() => {
		start();
	}, []);

	useEffect(() => {
		setDisplay(currentVal);
		console.log(lastClicked);
		console.log(currentVal);
		// eslint-disable-next-line
	}, [currentVal]);

	const start = () => {
		setDisplay('0');
		setCurrentVal('0');
		setLastClicked('');
	};

	const handleNumber = (e) => {
		if (currentVal.length !== MAX_CHARACTER && currentVal !== '0') {
			setCurrentVal((prev) => prev + e.target.value);
		} else if (currentVal.length !== MAX_CHARACTER) {
			setCurrentVal(e.target.value);
		}
		setLastClicked('num');
	};

	return (
		<div className='App'>
			<Display display={display} />
			<Button start={start} handleNumber={handleNumber} />
		</div>
	);
};

export default App;
