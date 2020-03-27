import React from 'react';


export const RouteInstance = [];




const matchPath = (path, locationPathname, exact=false) => {
  if (exact && path === locationPathname) {
    return true;
  }
  return false;
};

export class Route extends React.Component {
  render() {
    const { path, exact, component, render, children } = this.props;
    const match = matchPath(path, window.location.pathname, exact);
    if (!match) {
      return null;
    }
    if (component) {
      return React.createElement(component, null);
    }
    if (children) {
      return children;
    }
    return null;
  }
}

componenDidMount() {
  RouteInstance.push(this);
}