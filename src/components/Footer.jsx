import '../styles/Footer.css'

import logo1 from '../assets/logo/Icon-.png'

function Footer() {
    return (
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
            <div className='footer-left'>
                <h2><img src={logo1} alt='icon' /></h2>
                <p>Copyright © 2020 Nexcent ltd.<br />
                    All rights reserved</p>
                <div className="socials">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>

            <div className="footer-links">
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-right">
                <h4>Stay up to date</h4>
                <div className="subscribe">
                    <input type="email" placeholder="Your email address" />
                    <button><i className="fas fa-paper-plane"></i></button>
                </div>
            </div>

        </footer>
    )
}

export default Footer
