import React from 'react';
import './App.css';
import CalculatorButtons from './Components/CalculatorButtons';
import DisplayCalculator from './Components/DisplayCalculator';


class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      result: "",
    }
  }  
  containsChar = (res, char) => {
    return res.indexOf(char) !== -1
  }

  onClick = button => {
    let res = this.state.result
    let operator = this.state.operator
    if ( this.containsChar('/*+-', button) && this.containsChar('/*+-',res[res.length-1]))  {
      this.setState({ result: res.substr(0, res.length-1) + button})
      return
    }

    if (button === "=") {
      this.calculate();
    } else if (button === "Del") {
      this.setState({ result: this.state.result.slice(0, -1) })
    } else if (button === "Clear") {
      this.setState({ result: "" })
    } else if (this.state.result === "0" && button === "0") {
      this.setState({ result: '' + button })
    } else if (button === "." && res) {
      const splits = res.split(/[\+\-\*\/]+/)
        const split = splits[splits.length-1]
        if(this.containsChar(split, '.')) return
      res += "."
      this.setState({ result: res })
    
    } else {
      this.setState({ result: this.state.result + button, operator })
    }
  }

  calculate = () => {
    var res = ''

    if (this.state.result.includes('--')) {
      res = this.state.result.replace('--', '+')
    } else {
      res = this.state.result
    }

    try {
      this.setState({
        result: (eval(res) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <DisplayCalculator id="displayCalculator" result={this.state.result || "0"} />
        <CalculatorButtons id="dalculatorButtons" onClick={this.onClick} />
      </div>
    );
  }
}

export default App;


