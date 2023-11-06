import {Component} from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    // const{count} = this.state
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    } else {
      this.setState({count: 0})
    }
  }

  render() {
    const {count} = this.state
    return (
      <div data-testid="test">
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>{count}</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
