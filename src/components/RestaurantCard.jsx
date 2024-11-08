

export const RestaurantCard = ({resData})=>{
  const {name, cuisines, avgRating} = resData.info;
  // Base URL for images
  const baseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy";

  // Full image URL
  const imageUrl = `${baseUrl}/${resData.info.cloudinaryImageId}`;

  return(
    <div className="res-card" style={{backgroundColor : "#f0f0f0"
       }}>
      <img className="res-logo" src={imageUrl}/>
      <h3 className="decoration">{name}</h3>
      <h4 className="decoration">{cuisines[0]}</h4>
      <h4 className="decoration">{avgRating}</h4>
      <h4 className="decoration">{resData.info.sla.slaString}</h4>
    </div>
  )
}

