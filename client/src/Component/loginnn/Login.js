import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import gif from '../Images/delivery.gif';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  localStorage.clear("location");
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login attempt:', email, password);

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log('API Response:', response);

      const { role, datas,userId } = response.data;
      console.log(datas);
       localStorage.setItem("location",datas);
       localStorage.setItem("userId",userId);
       //localStorage.removeItem("location")
      if (role === 'user') {
        navigate('/main');
        console.log('Redirecting to Main Page');
      } else if (role === 'delivery') {
        navigate('/dhome');
        console.log('Redirecting to Delivery Home Page');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  const NavToSignup = () => {
    navigate('/signup');
  };

  const NavToDelivery = () => {
    navigate('/deliver');
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <h2 className="text-4xl text-center py-10 font-mono">
        Food Donation
      </h2>
      <div className="container mx-auto">
        <div className="flex-col md:flex-row flex w-8/12 overflow-hidden rounded-xl mx-auto shadow-2xl bg-white">
          <div className="md:w-1/2 justify-center mt-20">
            <img src={gif} alt="Delivery" />
          </div>
          <div className="md:w-1/2 py-16 px-12 mt-15">
            <h2 className="text-3xl mb-4 text-center">Login</h2>
            <form onSubmit={handleLogin}>
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
              <div className="mt-5">
                <input
                  required
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-blue-950 text-white py-2 text-center"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-5">
              <p>New User? Create an Account</p>
              <button
                className="w-full bg-blue-950 text-white py-2 text-center mt-3"
                onClick={NavToSignup}
              >
                Signup
              </button>
            </div>
            <div className="mt-5">
              <p>New Deliver? Create an Account</p>
              <button
                className="w-full bg-blue-950 text-white py-2 text-center mt-3"
                onClick={NavToDelivery}
              >
                Deliver SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
