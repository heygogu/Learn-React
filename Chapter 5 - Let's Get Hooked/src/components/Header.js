import { ImageElement } from '../App';

const Header = () => {
    return (
        <div className="header">
            {ImageElement}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Refer</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;