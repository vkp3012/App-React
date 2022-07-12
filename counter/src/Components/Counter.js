import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    increment = () => {
        this.setState({count:this.state.count + 1});
    }

    decrement = () => {
        this.setState({count:this.state.count - 1});
    }

  render() {
    return (
        
      <div className='App'>
        <h1>Counter App</h1>
        <button onClick={this.increment} className='counter'>+</button>
        <button onClick={this.decrement} className='counter'>-</button>
        <h2 className='count-number'>{this.state.count}</h2>
      </div>
    )
  }
}
