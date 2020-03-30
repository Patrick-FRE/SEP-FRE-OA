import React from 'react'

export default class Layout extends React.Component {
  render() {
    let header = this.props.header ? this.props.header : null;
    return (
      <>
       {header}
       <main>{this.props.children}</main> 
      </>
    );
  }
}