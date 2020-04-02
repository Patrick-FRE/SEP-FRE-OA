import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

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
