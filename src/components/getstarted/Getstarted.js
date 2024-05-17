import React from 'react'
import './getstarted.css'
import product from '../../assets/—Pngtree—3d shopping basket and trolley_5896095.png'
import service from '../../assets/Lovepik_com-380101363-customer-service-and-customer-call-service-scenario-work-phone-repair.png'


const Getstarted = () => {

  return (
    <div className='getstarted-container'>
        <h2 id="choose">Choose what you want to <span id="typewriter">review.</span></h2>
        <div className='get-started'>         
          <div className='card'>
          <img src={product} alt='shopping trolley' />
            <p>Review Products</p>
          </div>
          <div className='card'>
            <img src={service} alt='customer call service' />
            <p>Review Services</p>
          </div>   
        </div>
    </div>
  );
}

export default Getstarted
