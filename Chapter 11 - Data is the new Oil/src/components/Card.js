import { IMG_CDN_URL } from "../config";

export const Card=({name,cloudinaryImageId,avgRating,cuisines})=>{
  cuisines=cuisines.slice(0,3);  
  return(
      <div className="w-80 hover:ring-2 rounded-lg p-2 m-3 ml-10 shadow-lg bg-pink-100">
      <img className="h-60 w-72" alt="Card Photo" src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h5>Cuisines: {cuisines.join(",")}</h5>
      <h3>{"Rating: "+ avgRating}</h3>
      </div>
    );
  };