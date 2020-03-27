import React from 'react';


class Header extends React.Component {
  state = {
    logo: 'TODOMANAGER'
  }

  render(){
    return(
      <header className="todos-header primary">
        <span className="logo">{this.state.logo}</span>
      </header>
    )
  }
}

export default Header;

