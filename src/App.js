import React from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Getstarted from './components/getstarted/Getstarted';
import AdminLogin from './components/adminlogin/AdminLogin';
import Contactus from './components/contact/Contactus';
import Footer from './components/footer/Footer';
import Product from './components/feedback/Product';
import Service from './components/feedback/Service';
import dashboard from './components/adminlogin/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
      <Router>
        <div className='navbar-class'>
          <Navbar />
        </div>
        <div className='hero-class'>
        <Hero />
        </div>
        <Routes>
          <Route path='' element={<Getstarted/>}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/service' element={<Service />}/>
          <Route/>
        </Routes>
        <div>
          <Route path="/login" component={<AdminLogin/>} />
          <Route path="/dashboard" component={<dashboard/>} />
          <Contactus />
        </div>
        <div className='footer-class'>
          <Footer />
        </div>
      </Router>
  );
};

export default App
