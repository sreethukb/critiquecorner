import React from 'react'
import './getstarted.css'
import products from '../../assets/—Pngtree—3d shopping basket and trolley_5896095.png'
import services from '../../assets/Lovepik_com-380101363-customer-service-and-customer-call-service-scenario-work-phone-repair.png'
import { Link } from 'react-router-dom';

const Getstarted = () => {
  return (
    <div className='getstarted-container'>
        <h2 id="choose">Choose what you want to <span id="typewriter">review.</span></h2>
        <div className='get-started'>         
          <div className='card'>
            <Link to='product'>
            <img src={products} alt='shopping trolley' />
            <p>Review Products</p>
            </Link>
          </div>
          <div className='card'>
            <Link to='service'>
            <img src={services} alt='customer call service' />
            <p>Review Services</p>
            </Link>
          </div>   
        </div>
        
    </div>
  );
}

export default Getstarted
