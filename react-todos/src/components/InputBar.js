import React from 'react';

class InputBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
    console.log('InputBar: constructor')
  }

  inputChangeHandler = e => {
    console.log('InputBar: inputChangeHandler')
    this.setState({
      userInput: e.target.value
    });
  };

  keyPressHandler = e => {
    console.log('InputBar: KeyPressHandler')
    if(e.key === 'Enter') {
      this.props.addTodo(this.state.userInput);
      this.setState({ userInput: '' })
    };
  };
  
  
  render() {
    
    console.log('InputBar: render')
    return(
      <div className="todo-list-header__item">
        <input className="input-bar" value={ this.state.userInput} onChange={ this.inputChangeHandler } onKeyPress={ this.keyPressHandler }/>
      </div>
    );
  };
};

export default InputBar;