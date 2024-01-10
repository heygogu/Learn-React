import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About'
import Error from './components/Error'
const AppLayout = () => {
    return (
    <>
    <Header />
    <Body/>
    <Footer/>
    </>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    { 
        path:"/about",
        element:<About/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
