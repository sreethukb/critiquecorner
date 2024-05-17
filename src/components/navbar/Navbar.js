import React from 'react'
import './Navbar.css';
import home from '../../assets/PikPng.com_house-icon-png_531531.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='container'>
        <button className='nobtn'><Link to='hero' smooth='true' offset={0} duration={500}><img src={home} height="28px" alt="home" /></Link></button>
        <ul>
            <li><button className='nobtn'><Link to='getstarted-container' smooth='true' offset={0} duration={500}>Get Started</Link></button></li>
            <li><button className='nobtn'><Link to='adminlogin-container' smooth='true' offset={0} duration={500}>Admin Login</Link></button></li>
            <li><button className='btn'><Link to='contact-container' smooth='true' offset={0} duration={500}>Contact Us</Link></button></li>
        </ul>
    </nav>
  )
}

export default Navbar
