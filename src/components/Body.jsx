import { RestaurantCard} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false) 
    return (
      <h1>Looks like you are offline!! Please check your internet connection</h1>
    );

    const {loggedInUser, setUserName} = useContext(UserContext)

  return (listOfRestaurant.length === 0) ? <Shimmer/> :(
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input 
            type="text" 
            className="search-box border border-solid border-black rounded-md p-2 " 
            data-testid="searchInput"
            placeholder="Restaurant Name"
            value={searchText} 
            onChange={(e)=>{
            setsearchText(e.target.value);            
          }}/>
        <button
          className="p-2 bg-yellow-300 m-4 rounded-md" 
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
        <div className="m-4 p-4 flex items-center">
          <button 
            className="p-2 bg-yellow-300 rounded-lg" 
            onClick={()=>{
              const filteredList = listOfRestaurant.filter((res)=> res.averageRating > 4);
              setListOfRestaurant(filteredList);
            }
          }
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label htmlFor="">UserName: </label>
          <input type="text" placeholder="Name" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} className="border border-black p-2 m-2 rounded-md"/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
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
           filteredRestaurant.map((restaurant) => (
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

