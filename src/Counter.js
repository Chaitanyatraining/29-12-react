import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
    
        // this.state={
        //     count:5
        // }
    }

    state={
        count:0
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <h4>Counter: {this.state.count}</h4>
        <button
        onClick={() => {this.handleIncrement()}}
        >Increment</button>
      </div>
    )
  }
}

export default Counter