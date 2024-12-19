import { useContext } from "react";
import UserContext from "../utils/UserContext";


export const RestaurantCard = ({resData})=>{

  const {loggedInUser} = useContext(UserContext);

  const {name, cuisines, avgRating} = resData.info;
  

  // Base URL for images
  const baseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy";

  // Full image URL
  const imageUrl = `${baseUrl}/${resData.info.cloudinaryImageId}`;

  return(
    <div data-testid="resCard" className="m-4 p-4 w-[230px] h-[420px] bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={imageUrl}/>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className="decoration">{cuisines[0]}</h4>
      <h4 className="decoration">{avgRating}</h4>
      <h4 className="decoration">{resData.info.sla.slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  )
}

