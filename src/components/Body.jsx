import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return(
    <div className="body">
      <div className="filter">
      <button 
        className="filter-btn" 
        onClick={()=>{
          const filteredList = listOfRestaurant.filter((res)=> res.averageRating > 4);
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>      
      </div>
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
        {/* <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/> */}
        {/* instead of calling each RestaurantCard component */}
        {
          listOfRestaurant.map(restaurant =>(
            <RestaurantCard key={restaurant.item.id} resData={restaurant}/>
          ))
        }
      </div>
    </div>
  )
}

export default Body;