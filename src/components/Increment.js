import React, { Component } from "react";

class Increment extends Component {
  state = {
    //  Data Container
    buttonCount: 0,
  };

  // this.state.buttonCount
  // <Increment/>

  handleButtonAction = () => {
    console.log("Inside the method");
    this.setState({
      buttonCount: (this.state.buttonCount += 1),
    });
    console.log("Button Value", this.state.buttonCount);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleButtonAction()}>Increment</button>
        <h3>The Button Count: {this.state.buttonCount}</h3>
      </div>
    );
  }
}

export default Increment;

// 1. Do not Edit the state direct, setState()
