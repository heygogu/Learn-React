import { IMG_CDN_URL } from "../config";

export const Card=({name,cloudinaryImageId,avgRating,cuisines})=>{
  cuisines=cuisines.slice(0,3);  
  return(
      <div className='card'>
      <img alt="Card Photo" src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2>{name}</h2>
      <h5>Cuisines: {cuisines.join(",")}</h5>
      <h3>{"Rating: "+ avgRating}</h3>
      </div>
    );
  };