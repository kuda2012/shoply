import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./reducers/rootReducer";
import NavBar from "./NavBar";
const store = createStore(rootReducer);

test("Renders app", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
});
test("Renders Navbar", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
  expect(getByText("Shoply")).toBeInTheDocument();
});
it("matches snapshot", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
