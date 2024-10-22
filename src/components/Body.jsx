import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

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
        {/* <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/> */}
        {/* instead of calling each RestaurantCard component */}
        {
          resList.map(restaurant =>(
            <RestaurantCard key={restaurant.item.id} resData={restaurant}/>
          ))
        }
      </div>
    </div>
  )
}

export default Body;