import '../styles/Navbar.css'
import logo from '../assets/logo/Logo-diatas.png'
import { useState } from "react";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    }
    return (
        <nav>
            <div className="ini-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✕" : "☰"}
            </div>

            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#service" onClick={handleLinkClick}>Service</a></li>
                <li><a href="#feature" onClick={handleLinkClick}>Feature</a></li>
                <li><a href="#product" onClick={handleLinkClick}>Product</a></li>
                <li><a href="#testimonial" onClick={handleLinkClick}>Testimonial</a></li>
                <li><a href="#faq" onClick={handleLinkClick}>FAQ</a></li>
            </ul>

            <div className="ini-button">
                <a href="#" className="login">Login</a>
                <a href="#" className="signup">Sign up</a>
            </div>
        </nav>
    );
}

export default Navbar;

