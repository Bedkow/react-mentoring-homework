import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: props.value };
	}

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	handleDecrement = () => {
		this.setState({ value: this.state.value - 1 });
	};

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement('h2', null, `Counter value: ${this.state.value}`),
			React.createElement(
				'button',
				{ onClick: this.handleDecrement },
				'Decrement'
			),
			React.createElement(
				'button',
				{ onClick: this.handleIncrement },
				'Increment'
			)
		);
	}
}

export default Counter;
