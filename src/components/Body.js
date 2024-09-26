import { useEffect, useState } from "react";
import Card from './Card';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

const Body = () => {
    // useState => Powerful local state variables
    const [ restaurantList, setRestaurantList ] = useState([]);

    const [ filteredResList, setFilteredResList ] = useState([]);

    const [ searchText, setSearchText ] = useState('');

    // Whenever state variable updates, react triggers a reconciliation cycle(re-render the component).
    console.log('Body rendered');

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.073475&lng=77.546549&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);        
        setFilteredResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='search'>
                <input type='text' placeholder='Search...' value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                    const temp = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredResList(temp);
                }} />
                <button onClick={() => {
                    const temp = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredResList(temp);
                }} className='searchBtn'>Search</button>
                <button onClick={() => {
                    const filteredList = restaurantList.filter(res => res.info.avgRatingString > 4.5);
                    setFilteredResList(filteredList);
                }} className='top-rated'>Rating 4+</button>
            </div>
            <div className='card-container'>
                {filteredResList.map((resData) => (
                    <Link key={resData.info.id} to={"/restaurants/"+ resData.info.id} style={linkStyle} ><Card resData={resData} /></Link>
                ))}
            </div>
        </div>
    )
};

export default Body;