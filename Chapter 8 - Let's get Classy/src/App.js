import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

const AppLayout = () => {
    return (
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            { 
                path:"/",
                element:<Body/>,
            },
            { 
                path:"/about",
                element:<About/>,
                children:[{
                    path:"profile",
                    element:<Profile/>,
                }]
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
