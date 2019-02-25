import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount = () => {
    fetch("/data")
      .then(data => this.setState({ data }))
      .catch(console.log);
  };

  render() {
    return (
      <div className="App">
        <p>Hello world!</p>
      </div>
    );
  }
}

export default App;
