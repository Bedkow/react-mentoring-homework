import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
  }

  plus = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  minus = () => {
    const { value } = this.state;
    this.setState({ value: value - 1 });
  };

  render() {
    return React.createElement(
      'div',
      {},
      React.createElement('div', {}, this.state.value),
      React.createElement('button', { onClick: this.plus }, '+'),
      React.createElement('button', { onClick: this.minus }, '-'),
    );
  }
}

export default Counter;