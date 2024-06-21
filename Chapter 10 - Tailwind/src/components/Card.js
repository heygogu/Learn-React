import { IMG_CDN_URL } from "../config";

export const Card=({name,cloudinaryImageId,avgRating,cuisines})=>{
  cuisines=cuisines.slice(0,3);  
  return(
      <div className="w-60 hover:ring-2 rounded-lg p-2 m-3 shadow-lg bg-pink-100">
      <img alt="Card Photo" src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h5>Cuisines: {cuisines.join(",")}</h5>
      <h3>{"Rating: "+ avgRating}</h3>
      </div>
    );
  };