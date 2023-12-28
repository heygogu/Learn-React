import { Card } from './Card';
import restaurantsList from '../config';
import { useState } from 'react';
const Body = () => {
    //searchTxt is a local state variable
    function filterOut(searchTxt,restaurants){
       return restaurants.filter(restaurant=>restaurant.info.name.includes(searchTxt));
    }
    const [searchTxt, setSearchTxt] = useState("KFC");
    const [restaurants,setRestaurants]=useState(restaurantsList);
    //KFC is a default value here
    /** we can do it like this too
     * const searchVar=useState();
     * const [searchTxt,setSearchTxt]=searchVar;
     * 
     * The above code is perfectly valid
     */
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="search"
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={()=>{
                        const data=filterOut(searchTxt,restaurants);
                        setRestaurants(data);
                    }    
                   }>Search</button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restra) => {
                    return <Card {...restra.info} />;
                })}
            </div>
        </>
    );
};
export default Body;
