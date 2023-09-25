import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import RES_MENU_MOCK from "../mocks/resMenuMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import Header from "../Header";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_MENU_MOCK);
    },
  });
});

it("Should load Rest Menu component", async () => {
  //   render
  await act(async () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    )
  );

  expect(screen.getByText("Biriyani (5)")).toBeInTheDocument();
});

it("Add item to Cart and check cart in Header", async () => {
  //   render
  await act(async () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    )
  );

  //   query
  const accHeader = screen.getByText("Biriyani (5)");
  fireEvent.click(accHeader);

  // assert
  expect(screen.getAllByRole("list").length).toBe(6);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
});
