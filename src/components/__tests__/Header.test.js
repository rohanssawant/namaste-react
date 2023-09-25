import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter } from "react-router-dom";

it("Should load Login button in Header component", () => {
  // render
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  // query
  const loginBtn = screen.getByText("Login");
  // assert
  expect(loginBtn).toBeInTheDocument();
});

it("Logout button should change to Login button with onClick", () => {
  // render
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  // getting loginbtn
  const loginBtn = screen.getByText("Login");

  // simulating click eve
  fireEvent.click(loginBtn);

  // checking after eve
  const logoutBtn = screen.getByText("Logout");

  expect(logoutBtn).toBeInTheDocument();
});
