import React from "react";

// Regex
const matchPath = (path, locationPathname, exact = false) => {
  if (exact && path === locationPathname) {
    return true;
  }
  return false;
};

export class Route extends React.Component {
  render() {
    const { path, component, exact, children } = this.props;
    console.log(path, component, exact);

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
  }
}
