import React from "react";

// Regex
export const RouteInstance = [];

const register = route => {
  RouteInstance.push(route);
};

const unregister = route => {
  RouteInstance.splice(RouteInstance.indexOf(route), 1);
};

export const updateUrl = path => {
  window.history.pushState({}, "", path);
  RouteInstance.forEach(route => {
    console.log(route);
    route.forceUpdate();
  });
};

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

  componentDidMount() {
    register(this);
    this.popStateEvent = window.addEventListener("popstate", () => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    unregister(this);
    window.removeEventListener(this.popStateEvent);
  }
}
