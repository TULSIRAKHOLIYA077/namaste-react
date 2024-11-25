import { IMG_URL } from "../utils/constants";

const ItemList = ({items}) =>{
  console.log(items);
  
  return (
    <div>
        {items.map(item =>(
          <div key={item.card.info.id} className="w-[100%] h-[200px] p-2 m-2 border-b-2 text-left flex gap-14">
            <div className="w-3/4">
              <div className="py-2"> 
                <span>{item.card.info.name}</span> 
                <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span> 
              </div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-1/4 relative">
              <img className="w-[100%] h-[120px] rounded-lg" src={IMG_URL + item.card.info.imageId} alt="" />
              <button className="p-2 rounded-lg bg-white shadow-lg absolute top-28 left-10 text-lg font-bold text-green-500">Add +</button>
            </div>
          </div>
        ))} 
    </div>
  )
};

export default ItemList;