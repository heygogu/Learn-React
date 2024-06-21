import { Card } from './Card';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterOut } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
    //searchTxt is a local state variable

    const [searchTxt, setSearchTxt] = useState('');

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getData().catch((err) => console.log(err.message));
    }, []);

    async function getData() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    console.log('normal render');

    if (allRestaurants?.length === 0) {
        return <Shimmer />;
    }
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
                    onKeyDown={(e) => {
                        e.key === 'Enter' ? setFilteredRestaurants(filterOut(searchTxt, allRestaurants)) : null;
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterOut(searchTxt, allRestaurants);
                        setFilteredRestaurants(data);
                    }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants?.length === 0 ? (
                    <h1>Searched item is not available</h1>
                ) : (
                    filteredRestaurants?.map((restra) => {
                        return (
                            <Link to={'/restaurant/' + restra.info.id} key={restra.info.id}>
                                <Card {...restra.info} />
                            </Link>
                        );
                    })
                )}
            </div>
        </>
    );
};
export default Body;
