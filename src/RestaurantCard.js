import {IMG_CDN_URL} from './Contants';
const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating,})=>{

    return (
      <div className="card">
         <img src={IMG_CDN_URL + cloudinaryImageId } />
         <h3>{name}</h3>
         <h2>⭐ {avgRating}</h2>
         <h5>{cuisines.join(", ")}</h5>
      </div>
    );
};

export default RestaurantCard;