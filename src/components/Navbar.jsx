import '../styles/Navbar.css'
import logo from '../assets/logo/logo-diatas-.png'
import { useState } from "react";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="ini-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✕" : "☰"}
            </div>

            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#feature">Feature</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>

            <div className="ini-button">
                <a href="#" className="login">Login</a>
                <a href="#" className="signup">Sign up</a>
            </div>
        </nav>
    );
}

export default Navbar;

