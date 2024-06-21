import {useState,useEffect} from "react";
const useOnline=()=>{
    
    //automatic change the status- means state variable
    const [isOnline,setIsOnline]=useState(true);

    // I want to make this online/offline event run only once-- use useEffect()

    useEffect(()=>{

            const handleOnline=()=>{
                setIsOnline(true);
            }

            const handleOffline=()=>{
                setIsOnline(false);
            }

            window.addEventListener("online",handleOnline);

            window.addEventListener("offline",handleOffline);

            return ()=>{
               window.removeEventListener("online",handleOnline);
               window.removeEventListener("offline",handleOffline);
            }
    },[])
    return isOnline; //return true or false
}

export default useOnline;