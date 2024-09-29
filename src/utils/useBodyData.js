import { useEffect, useState } from "react";

const useBodyData = () => {
    const [ restaurantList, setRestaurantList ] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.073475&lng=77.546549&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);        
    };

    useEffect(() => {
        fetchData();
    }, []);

    return restaurantList;
}

export default useBodyData;