import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div className="App">
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={this.incrementAsync}>Async +</button>
        {' '}
        <button onClick={this.incrementIfOdd}>+ if odd</button>
      </div>
    );
  }
}

export default App;
