import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-white pb-4'>
      <h1 className='text-5xl font-semibold text-center py-10'>How Food Aid Works</h1>

      <div className='grid  md:grid-cols-3 gap-20 pt-5 mx-auto max-w-7xl px-4 grid-cols-2'>

        <div className='relative bg-green-500 text-white text-center rounded-md p-6 shadow-2xl'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 w-10 h-10 bg-white text-black rounded-full flex justify-center items-center font-semibold text-3xl'>1</div>
          <h2 className='text-3xl font-serif mb-4'>Create an Account</h2>
          <p>Log in as a user to donate food.</p>
        </div>
        <div className='relative bg-green-500 text-white text-center rounded-md p-6 shadow-2xl'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 w-10 h-10 bg-white rounded-full  text-black flex justify-center items-center font-semibold text-3xl'>2</div>
          <h2 className='text-3xl font-serif mb-4'>Fill Out Donation Form</h2>
          <p>Complete the donation form with details about the food you wish to donate.</p>
        </div>
        <div className='relative bg-green-500 text-white text-center rounded-md p-6 shadow-2xl'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 w-10 h-10 bg-white rounded-full  text-black flex justify-center items-center font-semibold text-3xl'>3</div>
          <h2 className='text-3xl font-serif mb-4'>Verify Your Address</h2>
          <p>Ensure your address is accurate for seamless pickup and delivery.</p>
        </div>
        <div className='relative bg-green-500 text-white text-center rounded-md p-6 shadow-2xl'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 w-10 h-10 bg-white rounded-full  text-black flex justify-center items-center font-semibold text-3xl'>4</div>
          <h2 className='text-3xl font-serif mb-4'>Submit Your Donation</h2>
          <p>Once you've filled out the form and verified your address, simply submit your donation request.</p>
        </div>
        <div className='relative bg-green-500 text-white text-center rounded-md p-6 shadow-2xl'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 w-10 h-10 bg-white rounded-full  text-black flex justify-center items-center font-semibold text-3xl'>5</div>
          <h2 className='text-3xl font-serif mb-4'>Pickup and Delivery</h2>
          <p>A delivery person will arrive at your location to pick up your donation.</p>
        </div>
        <div className='relative bg-green-500 text-white text-center rounded-md p-6 shadow-2xl'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 w-10 h-10 bg-slate-200 rounded-full  text-black flex justify-center items-center font-semibold text-3xl'>6</div>
          <h2 className='text-3xl font-serif mb-4'>Confirmation</h2>
          <p>You will receive confirmation once your donation has been successfully delivered.</p>
        </div>
      </div>
    </div>
  );
};

export default About;