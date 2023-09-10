import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import './SimpleFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle , faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

const SimpleFooter = () => {
  return (
    <>
    <footer>
        <div className="footer">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="link">
                <ul>
                    <h2>Website</h2>
                    <li><Link className="nav_link" to="/">Home</Link></li>
                    <li><Link className="nav_link" to="/">About Us</Link></li>
                    <li><Link className="nav_link" to="/">Contact Us</Link></li>
                </ul>
                <ul>
                    <h2>Servies</h2>
                    <li><Link className="nav_link" to="/">Remort</Link></li>
                    <li><Link className="nav_link" to="/">24x7</Link></li>
                    <li><Link className="nav_link" to="/">Job</Link></li>
                </ul>
                <ul>
                    <h2>Support</h2>
                    <li><Link className="nav_link" to="/">Help & Support</Link></li>
                    <li><Link className="nav_link" to="/">Trust & Safety</Link></li>
                    <li><Link className="nav_link" to="/">Guide</Link></li>
                </ul>
            </div>
            <div className="social_icon">
                <ul>
                    <li><Link className="nav_link" to="/"><FontAwesomeIcon icon={faGoogle} /></Link></li>
                    <li><Link className="nav_link" to="/"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                    <li><Link className="nav_link" to="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    <li><Link className="nav_link" to="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                </ul>
            </div>
            <div className="copyright">
                Copyright &copy;| www.website.com
            </div>
        </div>
    </footer>
    </>
  )
}

export default SimpleFooter