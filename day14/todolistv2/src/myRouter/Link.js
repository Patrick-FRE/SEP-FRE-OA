import React from 'react';
import { RouteInstance } from './Route';

const historyPush = path => {
  window.location.pushState({}, null, path);
}

const historyReplace = path => {
  window.location.replaceState({}, null, path);
}


export default class Link extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = (event) => {
    const {to} = this.props;
    event.preventDefault();
    
    historyPush(to);
    // replace ? historyReplace(to) : historyPush(to);
    window.history.pushState({}, null, to);
    RouteInstance.forEach(route => {
      route.forceUpdate();
    })
  }
  render() {
    const {to, children} = this.props;

    return <a href={to} onClick={this.clickHandler}>{children}</>
  }
};