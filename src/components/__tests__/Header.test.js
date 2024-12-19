import  { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header Component with a login button", () =>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});// when there are so many btn and you wannn find specific
  //         or
  //const loginButton = screen.getByText("Login");


  expect(loginButton).toBeInTheDocument();

});

it("Should load Header Component with Cart items 0", () =>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0)");

  expect(cartItems).toBeInTheDocument();

});

it("Should load Header Component with Cart item", () =>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);//if i want to cheack weather there is items or not. so use regex

  expect(cartItems).toBeInTheDocument();

});

it("Should change Login Button to Logout on click", () =>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name: "Logout"});

  //in this test it will cheack weather btn is working or not

  expect(logoutButton).toBeInTheDocument();

})