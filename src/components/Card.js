import { CDN_URL } from '../utils/constants';

const Card = ({ resData }) => {
    const { name,avgRatingString,cuisines,areaName,aggregatedDiscountInfoV3,id } = resData?.info;
    return (
        <div className='card'>
            <div className='card-img-container'>
                <div className='offer-overlay'>
                    <h3>{`${aggregatedDiscountInfoV3?.header || ''} ${aggregatedDiscountInfoV3?.subHeader || ''}`.trim()}</h3>
                </div>
                <img className='card-img' src={CDN_URL + resData?.info?.cloudinaryImageId} />
            </div>
            <h3 className='res-title'>{name}</h3>
            <h3 className='res-rating'><span className='stars'>&#9733;</span> {avgRatingString}</h3>
            <h4 className='res-cuisine'>{cuisines.join(", ")}</h4>
            <h4 className='res-area'>{areaName}</h4>
        </div>
    )
};

export default Card;