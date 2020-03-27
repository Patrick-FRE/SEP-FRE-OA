import React from 'react';
//import {Link } from 'react-router-dom';
import Link from './myLink';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoType: 'regular'
    }
  }

  setTodoType =(type) => {
    this.setState({
      todoType: type
    }, () => {
      this.props.getType(this.state.todoType)
    })
  }
  render() {
    return (
      <header className="todos-header primary">
        <span className="logo">TODOS</span>
        <div>
          <button onClick={() => this.setTodoType('regular')}>Regular Todo</button>
          <button onClick={() => this.setTodoType('flash')}>Flash Todo</button>
        </div>
        <Link to="/app" className="app">Main Page</Link>
      </header>
    )
    }
}

export default Header;

  // state = {
  //   logo: 'TODOMANAGER'
  // }

  // componentDidMount(){

  //   $('.logo').each(function(index, element) {
     
  //     let $el = $(element);
  //     let characters = $el.text().split('');
  //     console.log(characters)
  //     $el.html('');
  //     characters.forEach(function(ch) {
  //       let newSpan = $('<span>').text(`${ch}`);
  //       $el.append(newSpan)
  //     })
  //   })

  //   setInterval(function() {
  //     $('span').each(function(index, elem) {
  //       let r = Math.floor(Math.random() * 256);
  //       let g = Math.floor(Math.random() * 256);
  //       let b = Math.floor(Math.random() * 256);
  
  //       $(elem).css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
  //     });
  
  //   }, Math.random() * 1000);
  // }

  // render(){
  //   return(
  //     <header className="todos-header primary">
  //       <span className="logo">{this.state.logo}</span>
  //     </header>
  //   )
  // }
//}

//export default Header;

