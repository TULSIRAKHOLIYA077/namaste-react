  
import { act, fireEvent, render, screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//fack fetch function
global.fetch = jest.fn(() =>{
  return Promise.resolve({
    json: ()=>{
      return Promise.resolve(MOCK_DATA)
    }
  })
});

it("Should Search Res List for burger text input", async () => {
  
   await act(async () => render(
     <BrowserRouter>
       <Body/>
     </BrowserRouter>
   ));

   const cardsBeforeSearch = screen.getAllByTestId("resCard");
   expect(cardsBeforeSearch.length).toBe(8);// before click on search btn

   const searchBtn = screen.getByRole("button", {name: "Search"});

   //try input box search when you don't have placeholder 
   const searchInput = screen.getByTestId("searchInput");

   fireEvent.change(searchInput, {target: {value: "pizza"}});

   fireEvent.click(searchBtn);

   //expect 1 card cause of burger is coming 1 in UI
   const cardsAfterSearch = screen.getAllByTestId("resCard");
   expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurant", async () => {
  
  await act(async () => render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter>
  ));

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
  fireEvent.click(topRatedBtn);

  // const cardsAfterFilter = screen.getAllByTestId("resCard");
  // expect(cardsAfterFilter.length).toBe(0);

});



