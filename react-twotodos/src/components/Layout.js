import React from 'react';

class Layout extends React.Component {
  render(){
    let header = this.props.header? this.props.header:null;

    return(
      <>
        {header}
        <main className="todos-content">
          {this.props.children}
        </main>   
      </>
    );
  };
};

export default Layout;