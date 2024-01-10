import Logo from '../assets/img/photo.webp'
import { useState } from 'react';

const Title=()=>{
    return (
        <img className="logo" alt="logo" src={Logo}/>
    );
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title/>
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
