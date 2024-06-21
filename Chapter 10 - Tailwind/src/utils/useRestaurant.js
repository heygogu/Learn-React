import { useState,useEffect } from 'react';
import { FETCH_MENU_URL } from '../config';
//
const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    //get data from api
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + resId +'&catalog_qa=undefined&submitAction=ENTER');

        const json = await data.json();
        console.log(json);
        setRestaurant(json);
    }

    //if param change data should change too - create state
    return restaurant;
    //return restaurant data
};
export default useRestaurant;

//can we do named export -- yes , but it is only single functionality use default
