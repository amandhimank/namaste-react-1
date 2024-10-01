import MenuItem from "./MenuItem";
import { useState } from "react"; 
import { SlArrowDown } from "react-icons/sl";

const RestaurantCategory = ({ item, index, showItem, showIndex, setShowIndex }) => {
    const handleClick = () => {
        showIndex === index ? setShowIndex(null) : setShowIndex(index);
    }   

    return (
        <div className="">
            <hr className="my-8 h-4 border-none bg-zinc-100" />
            <div className="flex justify-between items-center cursor-pointer mb-6" onClick={handleClick}>
                <h2 className="font-bold text-lg ">
              {item.card?.card?.title} ({item.card?.card?.itemCards?.length || 0})</h2>
              <span className={`${showItem ? "-rotate-180" : "rotate-0"}`}><SlArrowDown /></span>
            </div>
            {showItem ? item && item.card?.card?.itemCards?.map((elem) => (
                    <MenuItem key={elem?.card?.info?.id} elem={elem} />
            )) : null}
          </div>
    )
}

export default RestaurantCategory;