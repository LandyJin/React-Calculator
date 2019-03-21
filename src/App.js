import React, { Component } from 'react';

// CSS
import './App.css';

// Components
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import ClearButton from './Components/Button/ClearButton';

class App extends Component {
  state = {
    input: "",
    row1: ["7", "8", "9", "-"],
    row2: ["4", "5", "6", "+"],
    row3: ["1", "2", "3", "*"],
    row4: ["0", "."]
  }

  addInput = val => {
    val = val.replace("^", "**")
    this.setState({
      input: [...this.state.input, val].join("")
    })
    console.log(this.state.input, val)
  }

  handleEqual = () => {
    /* eslint no-eval: 0 */
    this.setState({
      input: eval('(' + this.state.input + ')').toString()
    })
  }

  handleSquareRoot = () => {
    this.setState({
      input: Math.sqrt(this.state.input)
    })
  }

  render() {
    const {
      input,
      row1,
      row2,
      row3,
      row4
    } = this.state
    return (
      <div className="App">
        <div className="calWrapper">
          <Input input={input}/>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>AC</ClearButton>
            <Button handleClick={this.addInput}>^</Button>
            <Button handleClick={() => this.handleSquareRoot()}><small>2</small>&#8730;</Button>
          </div>
          <div className="row">
            {row1.map((row, i) => (
                <Button handleClick={this.addInput} key={i}>{row}</Button>
            ))}
          </div>
          <div className="row">
            {row2.map((row, i) => (
                <Button handleClick={this.addInput} key={i}>{row}</Button>
            ))}
          </div>
          <div className="row">
            {row3.map((row, i) => (
                <Button handleClick={this.addInput} key={i}>{row}</Button>
            ))}
          </div>
          <div className="row">
            {row4.map((row, i) => (
                <Button handleClick={this.addInput} key={i}>{row}</Button>
            ))}
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addInput}>/</Button>
          </div>
        </div>
        {console.log(input)}
      </div>
    );
  }
}

export default App;
