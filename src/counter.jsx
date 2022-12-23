import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseMethod = () => {
    this.setState({ count: this.state.count + 1 });
  };
  resetMethod = () => {
    this.setState({ count: 0 });
  };

  decreaseMethod = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p id={this.state.count==0&&"black"} className={this.state.count>0?"increase" :"decrease"  }>{this.state.count}</p>
        <button onClick={this.increaseMethod}>Increase</button> 
        <button onClick={this.resetMethod}>Reset</button>
        <button onClick={this.decreaseMethod}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
