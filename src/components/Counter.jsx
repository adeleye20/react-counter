import React, { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increaseCounter = () => {
		setCounter((counter) => counter + 1);
	};

	const decreaseCounter = () => {
		if (counter > 0) {
			setCounter((counter) => counter - 1);
		} else {
			return;
		}
	};

	const resetcounter = () => {
		setCounter((counter) => (counter = 0));
	};
	return (
		<div className="counter">
			<div className="count">{counter}</div>
			<div className="btn-container">
				<button onClick={decreaseCounter}>-</button>
				<button onClick={resetcounter}>Reset</button>
				<button onClick={increaseCounter}>+</button>
			</div>
		</div>
	);
};

export default Counter;
