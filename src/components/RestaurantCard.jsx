
const RestaurantCard = ({resName, cuisine, resData})=>{
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

export default RestaurantCard;