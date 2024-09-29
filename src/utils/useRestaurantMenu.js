import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch(RES_API + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json?.data?.cards);
        setResInfo(json?.data?.cards)
    }
    
    useEffect(() => {
        fetchMenu();
    }, [])

    return resInfo;
}

export default useRestaurantMenu;