import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { connect } from "./React-Redux/ReactRedux";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/// TDD VS BDD

// unit test/isolate test | itegration test | e2e(TESTING TEAM / DEVOPS TEAM: using cypress puppeteer webdriver) | shallow test | snapshot test

// Jest + react testing library | Jest + Enzyme
// Mocha + Enzyme
// (Jasmine + karma)

// testing coverage 70%-80% | 80 20 rule
// CI/CD || traverse CI, Jenkins, Gitlab CI

// How could you solve the problem if your application was slow.
// what kind of problem it is.
// if the data is really big from the server side. we could use server side pagination.
// if the problem is about first time loading. we could use CDN || lazyLoading || Server Side rendering || ShouldComponentUpate || Redux Selector || React Hooks

/// REST VS GRAPHIC QL

// REST:
// .../api/user
// .../api/company
// .../api/posts

// GRAPHIC QL
// one end point
// using query

// react ref
