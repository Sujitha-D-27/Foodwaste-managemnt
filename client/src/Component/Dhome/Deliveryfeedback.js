import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Deliveryfeedback() {
  const[username,setUsername]=useState();
  const[email,setEmail]=useState();
  const[message,setMessage]=useState();

  const sendmail=(e)=>{
    e.preventDefault();
    try {
      const response =axios.post('https://foodaid.onrender.com/feedback', { 
        username:username, 
        email:email,
        message:message  });
      toast.success("Thankyou for your feedback");
      console.log("success mail from client");
      console.log(username);
      
    } catch (error) {
      console.error('Error signing up:', error.response.data); // Handle error response
    }
  }
  return (
    <section
   
    className="w-full h-screen bg-white p-4 text-black"
  >
    <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full mt-5">
      <div className="pb-8 mt-4">
        <p className="text-4xl font-bold inline border-b-4 border-black  ">
         Feedback
        </p>
        <p className="py-6">Submit the form to get in touch with me.</p>
      </div>
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col w-full md:w-1/2 ">
          <input
            required
            type="text"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none" 
            onChange={(e)=>setUsername(e.target.value)}/>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md  border-black text-black focus:outline-none"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <textarea
            required
            name="message"
            placeholder="Enter your message"
            rows={10}
            className="p-2 bg-transparent border-2 rounded-md  border-black text-black focus:outline-none"
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <button
            className="text-white bg-black px-6 py-3 my-8 mx-auto flex items-center
          rounded-md hover:sacle-110 duration-300" onClick={sendmail}
          >
            Let's Talk
          </button>
        </form>
      </div>
    </div>
    <ToastContainer />
  </section>

  )
}

export default Deliveryfeedback;