import { ITEM_URL, RES_API } from "../utils/constants";

const MenuItem = ({ elem }) => {
  return (
    <div className="item flex h-48 justify-between w-full mb-10 border-b-2 pb-10">
      <div className="item-text flex flex-col w-[65%]">
        <h3 className="text-lg font-bold"> {elem?.card?.info?.name}</h3>
        <h4 className="font-bold mb-2">₹ {elem?.card?.info?.price ? elem?.card?.info?.price / 100 : elem?.card?.info?.defaultPrice / 100}</h4>
        <p className="item-desc text-sm text-gray-500 font-medium">{elem?.card?.info?.description}</p>
      </div>
      <div className="relative item-img w-[23%] ">
        <img className="rounded-xl object-cover w-full h-full" src={ ITEM_URL +  elem?.card?.info?.imageId} />
        <button className="absolute border-[1px] shadow-md left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white text-green-600 px-8 py-2 rounded-xl font-bold text-lg">ADD</button>
      </div>
    </div>
  );
};

export default MenuItem;
