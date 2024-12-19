import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test Case", () =>{
  // beforeAll(()=>{
  //   console.log("Before All");
  // })

  // beforeEach(()=>{
  //   console.log("Before Each");
  // })

  // afterAll(()=>{
  //   console.log("After All");
  // })

  // afterEach(()=>{
  //   console.log("After Each");
  // })


  it("Should load contact us component", () => {
    render(<Contact/>);
  
    const heading = screen.getByRole("heading"); //says if there is heading on screen or not
  
    expect(heading).toBeInTheDocument();//to make this function work we have to install library called @testing-library/jest-dom
  })
  
  test("Should load button inside contact us component", () => {
    render(<Contact/>);
  
    const button = screen.getByRole("button"); //says if there is heading on screen or not. This rols are defined by jest to the testing library
  
    //const button = screen.getByText("Random");//it will check if there is text with submit
  
    expect(button).toBeInTheDocument();//to make this function work we have to install library called @testing-library/jest-dom
  })
  
  test("Should load input name contact us component", () => {
    render(<Contact/>);
  
    const inputName = screen.getByPlaceholderText("Name");//it cheaks if there is name as a placeholder in input  
  
    expect(inputName).toBeInTheDocument();
  })
  
  test("Should load 2 boxes on the contact us component", () => {
    render(<Contact/>);
  
    const inputBoxes = screen.getAllByRole("textbox");//it cheaks if there is input more than 1 or not
    
    console.log(inputBoxes);//it returns jsx elements that is a object
    
  
    expect(inputBoxes.length).toBe(2);//   or    expect(inputBoxes.length).not.toBe(2)
  })
  
});

//         or

/*
test("Should load contact us component", () => {
  render(<Contact/>);

  const heading = screen.getByRole("heading"); //says if there is heading on screen or not

  expect(heading).toBeInTheDocument();//to make this function work we have to install library called @testing-library/jest-dom
})

test("Should load button inside contact us component", () => {
  render(<Contact/>);

  const button = screen.getByRole("button"); //says if there is heading on screen or not. This rols are defined by jest to the testing library

  //const button = screen.getByText("Random");//it will check if there is text with submit

  expect(button).toBeInTheDocument();//to make this function work we have to install library called @testing-library/jest-dom
})

test("Should load input name contact us component", () => {
  render(<Contact/>);

  const inputName = screen.getByPlaceholderText("Name");//it cheaks if there is name as a placeholder in input  

  expect(inputName).toBeInTheDocument();
})

test("Should load 2 boxes on the contact us component", () => {
  render(<Contact/>);

  const inputBoxes = screen.getAllByRole("textbox");//it cheaks if there is input more than 1 or not
  
  console.log(inputBoxes);//it returns jsx elements that is a object
  

  expect(inputBoxes.length).toBe(2);//   or    expect(inputBoxes.length).not.toBe(2)
})
  */

