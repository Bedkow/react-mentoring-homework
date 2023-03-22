import React from 'react';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { query: props.initialQuery };
		this.inputRef = React.createRef();
	}

	handleInputChange = (event) => {
		this.setState({ query: event.target.value });
	};

	handleSearch = () => {
		this.props.onSearch(this.state.query);
	};

	handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			this.handleSearch();
		}
	};

	componentDidMount() {
		this.inputRef.current.focus();
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement('input', {
				type: 'text',
				value: this.state.query,
				onChange: this.handleInputChange,
				onKeyDown: this.handleKeyDown,
				ref: this.inputRef,
			}),
			React.createElement('button', { onClick: this.handleSearch }, 'Search')
		);
	}
}

export default SearchForm;
