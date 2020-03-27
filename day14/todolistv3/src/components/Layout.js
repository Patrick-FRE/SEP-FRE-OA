import React from 'react';
import Header from './Header';

export default class Layout extends React.Component {
  render() {
    let header = this.props.header ? this.props.header : null;
    return (
      <>
        {header}
        <main>
          <ul className="todolist-items">{this.props.children}</ul>
        </main>
      </>
    );
  }
};