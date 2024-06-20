import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass"
import React from "react";
// const About=()=>{
//     return (
//         <div>
//             <h1>Rohit Kumar</h1>
//             <p>
//                 hjbknlmlbjgfsd djbvlksdnv 
//             </p>
//             <ProfileFunctionalComponent name={"Rohit "}/>

//             <Profile name={"Class related name"}/>
//             {
//             //earlier we use <Outlet/> here for profile children of about in app.js - check in code 
//             }
//         </div>
//     )
// }

class About extends React.Component{
    
    constructor(props){
        super(props); //as mandatory - research
        //first - can declare state here 
        console.log("Parent Constructor")
    }

   componentDidMount(){
        //third
        //best place to make an API call as it renders after render
        console.log("Parent componentDidMount")
    }

    render(){
        //second
        console.log("Parent Render");
        return (
            <div>
                <h1>Rohit Kumar</h1>
                <p>
                    hjbknlmlbjgfsd djbvlksdnv 
                </p>
                {/* <ProfileFunctionalComponent name={"Rohit "}/> */}
    
                <Profile name={"Class related name"}/>
                {
                //earlier we use <Outlet/> here for profile children of about in app.js - check in code 
                }
            </div>
        )
    }
}
export default About;