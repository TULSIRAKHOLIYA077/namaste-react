import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mocResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>{
  return Promise.resolve({
    json: ()=>{
      return Promise.resolve(MOCK_DATA)
    }
  })
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu/> 
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  })

  const accordionHeader = screen.getByText("Cheese Volcano (8)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  expect(screen.getByText("Cart - (0)")).toBeInTheDocument();

  //find add btn
  const addBtn = screen.getAllByRole("button", {name: "Add +"});
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1)")).toBeInTheDocument();

  // fireEvent.click(addBtn[1]);
  // expect(screen.getByText("Cart - (2)")).toBeInTheDocument();

  //if i want to add cart page also then add Cart component

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  const clearBtn = screen.getByRole("button", {name: "Clear Cart"});
  fireEvent.click(clearBtn);

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  expect(screen.getByText("Cart is empty Add Items to the cart")).toBeInTheDocument();


  expect(screen.getByText("Cart - (0)")).toBeInTheDocument();


})