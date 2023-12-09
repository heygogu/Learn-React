import React from 'react';
import ReactDOM from 'react-dom/client';
import goguImage from './gogu.jpg';

// const component = React.createElement('h1', {}, 'Hello World');
const root = ReactDOM.createRoot(document.getElementById('root'));

//react element
const element=(
    <h1>This is React Element</h1>
)

const ImageComponent=function(){
    return(
        <img src={goguImage} alt='My Photo' height='200px'/>
    );
}
//component
const HeaderComponent=function(){
   return(
    <div key='first'>
        {element}
        <ImageComponent/>
        
        {/* this is how comments are used ,can use any js code here*/}
        {5+6}

        <h1 key='1'> First Heading </h1>
        <h1 key='2'> Second Heading </h1>
        <h1 key='3'> Third Heading </h1>
    </div>
   );
}

root.render(<HeaderComponent/>);