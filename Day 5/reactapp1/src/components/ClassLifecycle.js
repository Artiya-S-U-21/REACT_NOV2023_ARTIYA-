import React, { Component } from "react";

class ClassLifecycleExample extends Component {
  // Mounting Phase
  constructor(props) {
    super(props);
    console.log("Component is constructed!");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component is mounted!");
  }

  // Updating Phase
  componentDidUpdate(prevProps, prevState) {
    console.log("Component has been updated!");
    // You can perform additional actions here based on state or prop changes
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  // Render
  render() {
    console.log("Rendering...");

    return (
      <div>
        <h1>Class Component Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default ClassLifecycleExample;