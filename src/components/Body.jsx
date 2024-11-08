import { RestaurantCard} from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(()=>{
     fetchData()
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    
  }

  //conditional rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  return (listOfRestaurant.length === 0) ? <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value);
            console.log(searchText);
            
          }}/>
        <button 
          onClick={() => {
            const searchedList = listOfRestaurant.filter((res) => 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurant(searchedList)
          }}
        >
          Search
        </button>
        </div>
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
            filteredRestaurant.map(restaurant => (
              <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                <RestaurantCard resData={restaurant} />
              </Link> 
            ))
        }
      </div>
    </div>
  )
}

export default Body;

