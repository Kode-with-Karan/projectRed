import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';
import './SimpleNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const SimpleNav = () => {
  return (
    <>
    <nav>
      <div className="nav">
        <div className="logo">
        <img src={Logo} alt="" />
        </div>
        <div className="links">
          <ul>
            <li><NavLink className="navlink" to="/"> Home </NavLink></li>
            <li><NavLink className="navlink" to="about"> About Us </NavLink></li>
            <li><NavLink className="navlink" to="/account.google.com/v3/signin/identifier_authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-502716160%3A1694238944211128&theme=glif"> contact Us </NavLink></li>
          </ul>
        </div>
        <div className="redirect">
          <div className="shop">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <div className="login">
          <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default SimpleNav