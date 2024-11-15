import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";

/*
<div id="parent">
  <div id="child">
    <h1>H1 Tag</h1>
    <h2>H2 Tag</h2>
  </div>
    <div id="child">
      <h1>H1 Tag</h1>
      <h2>H2 Tag</h2>
  </div>//this will be hell and that is why jsx came

</div>
*/

/*
const parent = React.createElement(
  "div",
  {id:"parent"},
  React.createElement("div",{id:"child"},[React.createElement("h1",{},"H1 Tag"),React.createElement("h2",{},"H2 Tag")])
)

const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World!");

console.log(heading);//object(react element) not h1 element


const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);//root.render will convert that object into an html tag

root.render(parent);
*/


// const styleCard = {
//   backgroundColor : "#f0f0f0"
// }


//look  github for older object

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[
        {
          path:"/",
          element: <Body />
        },
        {
          path:"/about",
          element: <About />
        },
        {
          path:"/contact",
          element: <Contact />
        },
        {
          path:"/grocery",
          element: <Grocery/>
        },
        {
          path:"/restaurants/:resId",
          element: <RestaurantMenu/>
        }
      ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)

