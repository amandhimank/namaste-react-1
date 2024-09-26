import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { ITEM_URL, RES_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [ resInfo, setResInfo ] = useState(null);
    const { resId } = useParams();

    const fetchMenu = async () => {
        const data = await fetch(RES_API + resId + "&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json();
        console.log(json?.data?.cards);
        setResInfo(json?.data?.cards)
    }

    useEffect(() => {
        fetchMenu();
    }, [])


    if(resInfo === null) return <Shimmer />;

    // Earlier it was giving error because resInfo was undefined and we where destructuring it.
    // So what we did, we removed resInfo == null condition from the return statement and below and added above this statement so that this destructuring doesn't even execute if resInfo is null.
    const { name, avgRatingString, costForTwoMessage, cuisines, areaName, totalRatingsString, sla } = resInfo[2].card?.card?.info;

    const { itemCards } = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1 className="title">{name}</h1>
            <div className="details-container">
                <div className="res-details">
                    <h4><span className='stars'>&#9733;</span> {avgRatingString} ({totalRatingsString}) <span style={{color: "#8D8F9B", margin: "0px 5px"}}>•</span> {costForTwoMessage}</h4>
                    <h5 className="cuisines">{cuisines.join(", ")}</h5>
                    <h5>Outlet <span className="locality">{areaName}</span></h5>
                    <h5>{sla.slaString}</h5>
                </div>
            </div>
            <div className="menu-items">
                <h2 style={{marginBottom: "3vh"}}>Recommended ({itemCards ? itemCards.length : 0})</h2>
                {itemCards && itemCards.map((item) => (
                    <div key={item?.card?.info?.id} className="item">
                    <div className="item-text">
                        <h3>{item?.card?.info?.name}</h3>
                        <h4>{"Rs. " + (item?.card?.info?.price / 100)}</h4>
                        <p className="item-desc">{item?.card?.info?.description}</p>
                    </div>
                    <div className="item-img">
                        <img src={ITEM_URL + item?.card?.info?.imageId} />
                        <button className="addbtn">ADD</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;