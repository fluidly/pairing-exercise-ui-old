import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = {
    data: null
  }

  componentDidMount = () => {
    fetch("/data")
      .then(res => res.json())
      .then(body => this.setState({ data: body.data }))
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <p>Hello world!</p>
        <pre>
          {this.state.data
            ? JSON.stringify(this.state.data[0], null, "  ")
            : null}
        </pre>
      </div>
    )
  }
}

export default App
