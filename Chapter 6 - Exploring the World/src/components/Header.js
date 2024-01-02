import { ImageElement } from '../App';
import { useState } from 'react';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            {ImageElement}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Refer</li>
                    <li>Cart</li>
                    <li>
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
