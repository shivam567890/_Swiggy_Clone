import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import {IMG_CDN_URL} from './Contants.js';
import Shimmer from "./Shimmer.js";
const RestaurantMenu = ()=>{
    const {id}= useParams();
    const [restaurant,setRestaurant]= useState();
     useEffect(()=>{
            getRestaurantMenu();
    },[]);
    async function getRestaurantMenu(){
        const data= await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5729847&lng=77.32490430000001&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
        console.log(restaurant);
        console.log(id);
    }
    return (!restaurant)? <Shimmer/> : (
        <>
        <div className="menu">
         <div>
            <h3> {restaurant?.cards[0]?.card?.card?.info?.name}</h3>
            <h3> {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
             <h3><img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="Cuisine Name"  height="400px" width="400px"/></h3>
         </div>
         <div>
            <h1>Menu</h1>

            <ul>
                {
          (restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item)=>
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          )
                }
            </ul>
         </div>
         </div>
        </>
    );
};

export default RestaurantMenu;
