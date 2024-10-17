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
      <img className="res-logo" src={resData.item.imageUrl}/>
      {/* <h3>Meghana Foods</h3> */}
      <h3>{resData.restaurantName}</h3>
      <h4>{resData.categories.join(',')}</h4>
      <h4>{resData.item.rating}</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  )
}

//look  github for older object

const resList = [
  {
    restaurantName: "KFC",
    location: "Various Locations",
    categories: ["Chicken", "Burgers", "Sides", "Beverages"],
    item: {
      id: 1,
      name: "Original Recipe Chicken",
      description: "Fried chicken with a secret blend of 11 herbs and spices.",
      price: 299,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmr6yv899mQZ4PLJ7XOvwVXXqG_Pnhf_oKg&s",
      category: "Chicken",
      rating: 4.5,
    },
    averageRating: 4.4,
    deliveryTime: "30-40 mins",
  },
  {
    restaurantName: "Burger King",
    location: "Various Locations",
    categories: ["Burgers", "Sides", "Beverages"],
    item: {
      id: 1,
      name: "Whopper",
      description: "Flame-grilled beef patty topped with fresh vegetables.",
      price: 249,
      category: "Burgers",
      imageUrl: "https://b.zmtcdn.com/data/pictures/chains/8/18902548/c8008523810583087401ff292c1763a3.jpg?fit=around|750:500&crop=750:500;*,*",
      rating: 4.6,
    },
    averageRating: 4.5,
    deliveryTime: "30-45 mins",
  },
  {
    restaurantName: "Domino's Pizza",
    location: "Various Locations",
    categories: ["Pizzas", "Sides", "Desserts"],
    item: {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza topped with mozzarella cheese and basil.",
      price: 499,
      category: "Pizzas",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTMdjFNfvW3Q7t_0U4kCGi9NjC0bnODoGmA&s",
      rating: 4.7,
    },
    averageRating: 4.6,
    deliveryTime: "25-35 mins",
  },
];

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
          resData={resList[0]}
        />
        <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>
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

