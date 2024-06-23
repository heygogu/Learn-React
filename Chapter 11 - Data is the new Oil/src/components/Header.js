import Logo from '../assets/img/rest.png';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Title = () => {
    return <img className="h-20 p-2 " alt="logo" src={Logo} />;
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    
    const {user}=useContext(UserContext);
    //why {user} ? because  user  will give whole object.

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg  ">
            <Title />

            {/*
             *when small device threshold cross change bg color
             *sm:bg-blue-500*/}

            <div className="">
                <ul className="flex py-10">
                    <li className="px-2">Home</li>
                    <li className="px-2">
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                    <li className="px-2">
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className="px-2">Contact</li>
                    <li>
                        <Link to={'/instamart'}>Instamart</Link>
                    </li>
                </ul>
            </div>
            
                <h2>{isOnline ? '✅' : '⛔'}</h2>
                <span className='p-10 font-bold text-red-500'>{user.name}</span>
                {isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login </button>
                )}
            
        </div>
    );
};
export default Header;
