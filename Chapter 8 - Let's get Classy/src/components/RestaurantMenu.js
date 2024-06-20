import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    //reading  a dynamic URL Params
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();
        console.log(json);
        setRestaurant(json);
    }
    
    if(restaurant==null){
        <Shimmer/>
    
    }
    else{
    return (
        <div>
            <h1>Restaurant id:{id} </h1>
            <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2>
            
            <img src={IMG_CDN_URL+restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt='Restaurant Image' width='200px'></img>
            <h2>Average Rating: {restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}</h2>
        </div>
    );
};
}

export default RestaurantMenu;
