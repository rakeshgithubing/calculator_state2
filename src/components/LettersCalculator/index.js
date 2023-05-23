// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
    value: '',
  }

  changeText = event => {
    this.setState({
      value: event.target.value,
    })
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count, value} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="inputText" className="paragraph">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input-text"
              id="inputText"
              placeholder="Enter the phrase"
              onChange={this.changeText}
              value={value}
            />
            <div className="count-container">
              <p className="count-paragraph">No.of letters: {count}</p>
            </div>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="picture"
        />
      </div>
    )
  }
}

export default LettersCalculator
