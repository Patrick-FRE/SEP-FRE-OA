import React from 'react'

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }
  inputHandler = (e) => {
    this.setState({input: e.target.value});
  }
  enterHandler = (e) => {
    if (e.key === 'Enter') {
      this.props.addTodo(this.state.input);
      this.setState({input: ''});
    }
  }
  render() {
    return (
      <>
        <input className="input-bar"
                value={this.state.input}
                onChange={this.inputHandler}
                onKeyPress={this.enterHandler}
        />
      </>
    );
  }
}

export default InputBar;