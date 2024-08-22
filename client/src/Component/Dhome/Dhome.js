import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Foodimage from '../Images/Food.png'; // Importing the image
import { useNavigate } from 'react-router-dom';
import donateees from '../Images/dpi.png';
function Dhome() {
  const [deliveryData, setDeliveryData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const deliveryLocation = localStorage.getItem("location");
  const deliverypersonid = localStorage.getItem("deliverypersonid");
  useEffect(() => {
    const fetchDeliveryData = async () => {
      try {
        const response = await axios.post("https://foodaid.onrender.com/Deliverydetail", { deliveryLocation });
        setDeliveryData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchDeliveryData();
  }, [deliveryLocation]);

  const handleStatus = async () => {
    if (deliveryData && deliveryData.status !== "pick up food") {
      const donation_id = deliveryData.donation_id;
      try {
        const response = await axios.post("https://foodaid.onrender.com/dstatus", {
          donation_id: donation_id,
          status: status,
          
        });
        console.log(response);
        toast.success("status updated successfully");
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("This donation has already been picked up by someone.");
    }
  }
  const navigate=useNavigate();
  const handleFeedback=()=>{
    navigate('/deliveryfeedback');
  }

  return (
    <div className="max-w-md mx-auto">
      
      {deliveryData ? (
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="flex justify-center">
            <img className="h-48 w-full object-cover" src={Foodimage} alt="Delivery Image" /> {/* Center the image */}
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{deliveryData.foodname}</div>
            <p className="text-gray-700 text-base">{deliveryData.description}</p>
          </div>
          <div className="px-6 py-4">

           <p>Address: {deliveryData.address}</p>
           <p>Category: {deliveryData.category}</p>
            <p>Date: {new Date(deliveryData.date).toLocaleString()}</p>
            <p>Email: {deliveryData.email}</p>
            <p>Food Type: {deliveryData.foodtype}</p>
            <p>Mobile No: {deliveryData.mobile_no}</p>
            <p>Quantity: {deliveryData.quantity}</p>
            <p>Serves: {deliveryData.serves}</p>
            <p>User ID: {deliveryData.userId}</p>
            <select
              required
              name="status"
              className="p-2 my-2 mr-4 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled selected>Select status</option>
              <option value="pick up food">Pick up food</option>
              <option value="Delivered food">Delivered food</option>
            </select>
            <button onClick={handleStatus} className="bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Update Status</button>
            <div className='flex justify-center'>
            <button onClick={handleFeedback} className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4 w-72 mt-5 rounded ">Feedback</button></div>
          </div>
        </div>
      ) : (
        <div className='text-center font-serif font-extrabold text-4xl'><h1>No more donations!!!</h1>
        <img className='max-w-md' src={donateees}alt=""></img></div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Dhome;
