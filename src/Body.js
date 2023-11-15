import { restaurantList } from "./Contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



function filterData(searchText, restaurants) {
  const newData = restaurants.filter((restaurant) => 
    restaurant?.info?.name?.toLowercase()?.includes(searchText.toLowercase())
  );
  return newData;
}


const Body = () => {
  const[allRestaurant,setallRestaurant]= useState([]);
  const [filteredrestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, SetSearchText] = useState("");


  useEffect(() => {
      getRestaurants();
  },[]);

  async function getRestaurants(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5729847&lng=77.32490430000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setallRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
  if(filteredrestaurants?.length === 0 && allRestaurant.length !==0) {
    return <h1>No Restaurant Match your Filter!!  </h1>
  }
  return (allRestaurant?.length===0)? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            SetSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Need to filter the data
            // console.log(restaurantList.length);
            const data = filterData(searchText, allRestaurant);
            // console.log(data);
            setfilteredRestaurants(data);
          }}
        >
          Search 
        </button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} >
            <RestaurantCard {...restaurant?.info} />
             </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
