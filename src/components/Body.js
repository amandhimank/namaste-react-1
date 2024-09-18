import Card from './Card';
import resList from '../utils/mockData';

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <input type='text' placeholder='Search...' />
                <button className='searchBtn'>Search</button>
            </div>
            <div className='card-container'>
                {resList.map((resData) => (
                    <Card key={resData.info.id} resData={resData} />
                ))}
            </div>
        </div>
    )
};

export default Body;