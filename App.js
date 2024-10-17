import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = ()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

// const styleCard = {
//   backgroundColor : "#f0f0f0"
// }

const RestaurantCard = ({resName, cuisine, resData})=>{
  return(
    <div className="res-card" style={{backgroundColor : "#f0f0f0"
       }}>
      <img className="res-logo" src={resData.items[0].imageUrl}/>
      {/* <h3>Meghana Foods</h3> */}
      <h3>{resData.restaurantName}</h3>
      <h4>{resData.items[0].category}</h4>
      <h4>{resData.items[0].rating}</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  )
}

//look  github for older object

const resObj = {
  restaurantName: "KFC",
  location: "Various Locations",
  items: [
    {
      id: 1,
      name: "Original Recipe Chicken",
      description: "Fried chicken with a secret blend of 11 herbs and spices.",
      price: 299,
      category: "Chicken",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55SRxTAXYYgFLFgldknc-rNA5EdMtTuIwVg&s", // Example image URL
      rating: 4.5,
    },
    {
      id: 2,
      name: "Zinger Burger",
      description: "Spicy chicken fillet in a burger bun with lettuce and mayo.",
      price: 199,
      category: "Burgers",
      imageUrl: "https://example.com/images/zinger-burger.jpg", // Example image URL
      rating: 4.2,
    },
    {
      id: 3,
      name: "French Fries",
      description: "Crispy golden fries.",
      price: 99,
      category: "Sides",
      imageUrl: "https://example.com/images/french-fries.jpg", // Example image URL
      rating: 4.3,
    },
    {
      id: 4,
      name: "Pepsi",
      description: "Chilled Pepsi.",
      price: 49,
      category: "Beverages",
      imageUrl: "https://example.com/images/pepsi.jpg", // Example image URL
      rating: 4.0,
    },
  ],
  averageRating: 4.4,
  deliveryTime: "30-40 mins",
};

const Body = () =>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard 
          resName="Meghana Foods" 
          cuisine="Biryani, North Indian, Asian"
        /> */}
        <RestaurantCard 
          // resName="KFC" 
          // cuisine="Burger, Fast Food"
          resData={resObj}
        />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

