
export const RestaurantCard1 = ({resName, cuisine, resData})=>{
  const {imageUrl,rating} = resData.item;
  const {restaurantName,categories,deliveryTime} = resData;
  return(
    <div className="res-card" style={{backgroundColor : "#f0f0f0"
       }}>
      <img className="res-logo" src={imageUrl}/>
      {/* <h3>Meghana Foods</h3> */}
      <h3>{restaurantName}</h3>
      <h4>{categories.join(',')}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

export const RestaurantCard2 = ({resData})=>{
  // Base URL for images
  const baseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy";

  // Full image URL
  const imageUrl = `${baseUrl}/${resData.info.cloudinaryImageId}`;

  return(
    <div className="res-card" style={{backgroundColor : "#f0f0f0"
       }}>
      <img className="res-logo2" src={imageUrl}/>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines[0]}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  )
}

