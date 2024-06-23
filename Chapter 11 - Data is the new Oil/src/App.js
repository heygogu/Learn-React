import React, { lazy, Suspense ,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

import Shimmer from './components/Shimmer.js';
import UserContext from './utils/UserContext.js';

//import Instamart from './components/Instamart';

//*** See this
const Instamart = lazy(() => import('./components/Instamart'));

const AppLayout = () => {
    const [user, setUser] = useState({
        name: 'Rohit',
        email: 'rohit@gmail.com',
    });
    return (
        <UserContext.Provider value={{
            user:user,
        }}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />,
                    },
                ],
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />,
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);