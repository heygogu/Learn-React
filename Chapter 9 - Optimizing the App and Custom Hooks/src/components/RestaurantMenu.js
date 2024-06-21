import { useParams } from 'react-router-dom';
//import { useEffect, useState } from 'react';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
    //reading  a dynamic URL Params
    const { id } = useParams();
    //const [restaurant, setRestaurant] = useState(null);
    const restaurant = useRestaurant(id);

    if (restaurant == null) {
        <Shimmer />;
    } else {
        return (
            <div>
                <h1>Restaurant id:{id} </h1>
                <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2>

                <img
                    src={IMG_CDN_URL + restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}
                    alt="Restaurant Image"
                    width="200px"></img>
                <h2>Average Rating: {restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}</h2>
            </div>
        );
    }
};

export default RestaurantMenu;
