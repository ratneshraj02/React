import { useState } from 'react';
import './App.css';

function App() {
	const [value, setValue] = useState(5);
	//let value = 5;

	const increase = () => {
		setValue(value + 1); //NOT so good
	};

	const decrement = () => {
		if (value > 0) {
			setValue(value - 1);
		}
	};
	return (
		<>
			<div>
				<h1>Value : {value}</h1>
				<button
					onClick={increase}
					id="btn">
					Increment
				</button>
				<button
					onClick={decrement}
					id="btn">
					Decrement
				</button>
			</div>
		</>
	);
}

export default App;
