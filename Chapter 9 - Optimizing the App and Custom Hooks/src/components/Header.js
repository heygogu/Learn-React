import Logo from '../assets/img/photo.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Title = () => {
    return <img className="logo" alt="logo" src={Logo} />;
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li>Contact</li>
                    <li>
                        <Link to={'/instamart'}>Instamart</Link>
                    </li>
                    <li>
                        <p>{isOnline ? '✅' : '⛔'}</p>
                        {isLoggedIn ? (
                            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                        ) : (
                            <button onClick={() => setIsLoggedIn(true)}>Login </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Header;
