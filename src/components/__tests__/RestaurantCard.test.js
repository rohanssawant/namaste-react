import { render, screen } from "@testing-library/react";
import resData from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";

it("Should render RestaurantCard with Mock props", () => {
  // render
  render(<RestaurantCard resData={resData} />);

  const name = screen.getByText("Coffee Over Breakfast");

  expect(name).toBeInTheDocument();
});
