import React from 'react';
import Navbar from '../Navbar/Navbar';
import hero from "../Images/Donation.gif";
import { useNavigate } from 'react-router-dom';
import About from '../About/About';
import Bot from '../Bot/Bot';
import Contact from '../Contact/Contact';


const Hero = () => {
  const navigate = useNavigate();
  const navToForm = () => {
    navigate('/donateform');
  };
  return (
    <div>
      <Navbar />
      <div className='pt-20'>
        <div id="home" className='min-h-screen bg-white flex px-5 md:px-20 py-24 flex-col md:flex-row'>
          <div className='md:w-1/2'>
            <h1 className='text-4xl px-2 pt-10 font-semibold'>Welcome to Food Aid !!</h1>
            <p className='px-2 py-10 text-2xl'>
              We're dedicated to fighting hunger and reducing food waste. Our mission is to create a community
              where everyone has access to nutritious food, no matter their circumstances.
              We partner with local businesses, farmers, and community members to collect surplus food and distribute 
              it to those in need.
            </p>
            <button className='bg-purple-800 text-white px-5 py-3' onClick={navToForm}>Donate Food</button>
          </div>
          <div className='md:w-1/2 bg-green-400'>
            <img src={hero} alt='0' />
          </div>
        </div>

        <div id="about">
          <About />
        </div>
        <div id="bot">
          <Bot />
        </div>
        <div id="contact">
         <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
