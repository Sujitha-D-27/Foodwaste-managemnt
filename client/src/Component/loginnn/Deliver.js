import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gif from '../Images/delivery.gif';
function Deliver() {
    const[username,setUsername]=useState();
    const [email,setEmail]=useState();
  const[password,setPassword]=useState();
  const [error, setError] = useState("");
  const [location,setLocation]=useState("");
    const navigate=useNavigate();
 const handlesubmit =async(e)=>{
  e.preventDefault();
  if (!username || !email || !password) {
    setError("Please fill in all required fields");
} 
 else if(!validateusername(username)){
    setError("Username should not exceed 30 characters");
  }
  else if(!validatepassword(password)){
    setError("Password should contain atleast 8 characters include 1uppercase,1lowercase,1number,1 special character");

  }
  else{
    
    try {
      const response = await axios.post('http://localhost:5000/Dsign', { 
        username:username,
        email:email,
        location:location,
        password:password
       });
      
      console.log(response.data);
      console.log(location);
      navigate('/dhome'); // Handle success response
    } catch (error) {
      console.error('Error signing up:', error.response); // Handle error response
    }
   
  }
 }
 const validateusername=(username)=>{
       return username.length<=30;
 }
 const validatepassword=(password)=>{
  const pwdregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return pwdregex.test(password);
 }
  return (
    <div className="min-h-screen bg-slate-200 ">
      <h2 className="text-4xl text-center py-10 font-mono">
       Food Donation
      </h2>
      <div className="container mx-auto ">
        <div className=" flex-col md:flex-row flex w-8/12 overflow-hidden rounded-xl mx-auto shadow-lg bg-white">
          <div className="md:w-1/2 justify-center mt-20">
            <img src={gif} alt="0" />
          </div>
          <div className="md:w-1/2 py-16 px-12 mt-15">
            <h2 className="text-3xl mb-4 text-center">Sign Up</h2>
            <div>
              <div className="mt-5">
                <input
                required
                  type="text"
                  placeholder="Username"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={username}
                   onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <input
                required
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={email}
                   onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <select
              required
              name="location"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" disabled selected>Select location</option>
              <option value="Tambaram">Tambaram</option>
              <option value="Adayar">Adayar</option>
              <option value="Pallavaram">Pallavaram</option>
              <option value="Pammal">Pammal</option>
              <option value="Triplicane">Triplicane</option>
              <option value="Washermenpet">Washermenpet</option>
              <option value="Kundrathur">Kundrathur</option>
              <option value="Aavadi">Aavadi</option>
              <option value="T-Nagar">T-Nagar</option>
              <option value="Anna nagar">Anna nagar</option>
              <option value="ECR">ECR</option>
              <option value="OMR">OMR</option>
              <option value="Chrompet">Chrompet</option>
              <option value="Poonthamalli">Poonthamalli</option>
              <option value="Hasthinapuram">Hasthinapuram</option>
            </select>
              <div className="mt-5">
                <input
                required
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2  w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <button
                  className="w-full bg-blue-950 text-white py-2 text-center"onClick={handlesubmit}
                  
                >
                  SignUp 
                </button>
              </div>
             
              
              </div>
            </div>
          </div>
        </div>
      </div>
  
  )
  
}

export default Deliver