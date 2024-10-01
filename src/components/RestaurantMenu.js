import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MdStars } from "react-icons/md";   
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

    // showIndex => state variable => stores the index of the category component who needs to be expanded
    // and all other category components will be collapsed.   
    // It's initial value is 0, that means, first category will be expanded by default.
    const [ showIndex, setShowIndex ] = useState(null);

  if (resInfo === null) return <Shimmer />;

  // Earlier it was giving error because resInfo was undefined and we where destructuring it.
  // So what we did, we removed resInfo == null condition from the return statement and below and added above this statement so that this destructuring doesn't even execute if resInfo is null.
  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    areaName,
    totalRatingsString,
    sla,
  } = resInfo[2].card?.card?.info;

  const { itemCards } =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  var categories = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  categories = categories.filter((item) =>
    item.card?.card["@type"].includes("ItemCategory")
  );

  console.log(categories);

  return (
    <div className="menu max-w-screen-md container mx-auto">
      <h1 className="title mt-20 font-bold text-black text-2xl mb-7">{name}</h1>
      <div className="details-container p-4 rounded-3xl bg-gradient-to-t from-zinc-200 from-20% to-white">
        <div className="res-details flex flex-col gap-2 border-2 p-3 bg-white rounded-3xl">
          <h4 className="text-black font-bold flex">
            <span className="stars mr-1 text-2xl">
              <MdStars color="green" />
            </span>{" "}
            {avgRatingString} ({totalRatingsString}){" "}
            <span style={{ color: "#8D8F9B", margin: "0px 5px" }}>•</span>{" "}
            {costForTwoMessage}
          </h4>
          <h5 className="cuisines text-orange-600 font-bold text-sm underline">
            {cuisines.join(", ")}
          </h5>
          <h5 className="text-sm text-black font-bold">
            Outlet{" "}
            <span className="locality ml-2 text-zinc-500">{areaName}</span>
          </h5>
          <h5 className="text-sm text-black font-bold">{sla.slaString}</h5>
        </div>
      </div>
      <div className="menu-items px-4">
        {categories.map((item, index) => (
            // Controlled Compoenent => because we have removed the states from the child(RestaurantCategory) component, basically we have taken the control over state from the children and given control to the parent and based on the state paretn controls the category components will expand or collapse.
            <RestaurantCategory key={item.card?.card?.title} index={index} item={item} showItem={ index === showIndex ? true : false } showIndex={showIndex}  setShowIndex={ (index) => setShowIndex(index) } />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
