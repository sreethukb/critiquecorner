import React from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Getstarted from './components/getstarted/Getstarted';
import AdminLogin from './components/adminlogin/AdminLogin';
import Contactus from './components/contact/Contactus';
import Footer from './components/footer/Footer';


const App = () => {
    return (
      <div>
        <Navbar />
        <Hero />
        <Getstarted />
        <AdminLogin />
        <Contactus />
        <Footer />
      </div> 
  );
};

export default App