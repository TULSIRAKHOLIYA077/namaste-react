import {RestaurantCard1, RestaurantCard2} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";

const Body = () =>{
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    
    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    
  }

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
        {/* <RestaurantCard1 
          resName="Meghana Foods" 
          cuisine="Biryani, North Indian, Asian"
        /> */}

        {/* <RestaurantCard1 
          // resName="KFC" 
          // cuisine="Burger, Fast Food"
          resData={resList[0]}
        /> */}
        
        {/* <RestaurantCard1 resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/> */}
        {/* instead of calling each RestaurantCard component */}
        {
          listOfRestaurant === resList ? (
            listOfRestaurant.map(restaurant => (
              <RestaurantCard1 key={restaurant.item.id} resData={restaurant} />
            ))
          ) : (
            listOfRestaurant.map(restaurant => (
              <RestaurantCard2 key={restaurant.info.id} resData={restaurant} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default Body;

