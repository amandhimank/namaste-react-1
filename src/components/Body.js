import { useEffect, useState } from "react";
import Card, { withPromotedLabel } from './Card';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBodyData from "../utils/useBodyData";

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

const Body = () => {
    // useState => Powerful local state variables
    const restaurantList = useBodyData();
    
    const [ filteredResList, setFilteredResList ] = useState(restaurantList);

    const PromotedRest = withPromotedLabel(Card);

    useEffect(() => {
        setFilteredResList(restaurantList);
    }, [restaurantList]);

    const [ searchText, setSearchText ] = useState('');

    // Whenever state variable updates, react triggers a reconciliation cycle(re-render the component).
    console.log('Body rendered');

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) {
        return (
            <h1>Looks like you are offline! Please check your inernet connection!</h1>
        )
    }

    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className='body w-full flex flex-col'>
            <div className='search w-full flex justify-center p-10'>
                <input className="py-2 px-4 rounded-l-3xl border" type='text' placeholder='Search...' value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                    const temp = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredResList(temp);
                }} />
                <button onClick={() => {
                    const temp = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredResList(temp);
                }} className='searchBtn px-4 py-2 bg-orange-500 mr-8 rounded-r-full text-white'>Search</button>
                <button onClick={() => {
                    const filteredList = restaurantList.filter(res => res.info.avgRatingString > 4.3);
                    setFilteredResList(filteredList);
                }} className='top-rated px-4 py-2 bg-zinc-500 text-white rounded-full'>Rating 4+</button>
            </div>
            <div className='card-container max-w-screen-2xl container mx-auto flex justify-center flex-wrap px-28 gap-8'>
                {filteredResList.map((resData) => (
                    <Link key={resData.info.id} to={"/restaurants/"+ resData.info.id} style={linkStyle} >
                        {resData.info.avgRatingString > 4.5 ? <PromotedRest resData={resData} /> : <Card resData={resData} />}
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Body;