import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const Card = ({ resData }) => {
  const {
    name,
    avgRatingString,
    cuisines,
    areaName,
    aggregatedDiscountInfoV3,
    id,
  } = resData?.info;
  return (
    <div className="card w-64 rounded-2xl overflow-hidden hover:scale-[0.97] transition">
      <div className="card-img-container relative h-40 w-full rounded-2xl overflow-hidden">
        <div className="offer-overlay bg-gradient-to-t from-black via-transparent to-transparent h-full w-full flex items-end absolute text-white py-1 px-2">
          <h3 className="text-lg font-bold">
            {`${aggregatedDiscountInfoV3?.header || ""} ${
              aggregatedDiscountInfoV3?.subHeader || ""
            }`.trim()}
          </h3>
        </div>
        <img
          className="card-img h-full w-full object-cover"
          src={CDN_URL + resData?.info?.cloudinaryImageId}
        />
      </div>
      <div className="px-3 py-2">
        <h3 className="res-title font-bold text-black text-lg truncate">{name}</h3>
        <h3 className="res-rating flex items-center gap-1 font-semibold">
          <span className="stars text-2xl"><MdStars color="green" /></span> {avgRatingString}
        </h3>
        <h4 className="res-cuisine truncate text-base font-medium text-zinc-600">{cuisines.join(", ")}</h4>
        <h4 className="res-area text-base font-medium text-zinc-600">{areaName}</h4>
      </div>
    </div>
  );
};

export default Card;
