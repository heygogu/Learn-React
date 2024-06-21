import Logo from '../assets/img/photo.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Title = () => {
    return <img className="h-32 p-2 " alt="logo" src={Logo} />;
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg  ">
            <Title />

            {/*
            *when small device threshold cross change bg color
            *sm:bg-blue-500*/}

            <div className="">
                <ul className='flex py-10'>
                    <li className='px-2'>Home</li>
                    <li className='px-2'>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                    <li className='px-2'>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className='px-2'>Contact</li>
                    <li>
                        <Link to={'/instamart'}>Instamart</Link>
                    </li>
                    
                </ul>
            </div>
            <h1 className='px-2'>
                <p>{isOnline ? '✅' : '⛔'}</p>
                {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login </button>
            )}
            </h1>
        </div>
    );
};
export default Header;
