import { CDN_URL } from '../utils/constants';

const Card = ({ resData }) => {
    const { name,avgRatingString,cuisines,areaName } = resData.info;
    return (
        <div className='card'>
            <div className='card-img-container'>
                <img className='card-img' src={CDN_URL + resData.info.cloudinaryImageId} />
            </div>
            <h3 className='res-title'>{name}</h3>
            <h3 className='res-rating'>{avgRatingString} <span>&#9733;</span></h3>
            <h4 className='res-cuisine'>{cuisines.join(", ")}</h4>
            <h4 className='res-area'>{areaName}</h4>
        </div>
    )
};

export default Card;