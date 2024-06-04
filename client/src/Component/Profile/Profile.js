import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState({});
  const [donations, setDonations] = useState([]);
  const userId = localStorage.getItem('userId'); // Assuming you store userId in localStorage
  const navigate = useNavigate();

  useEffect(() => {
  

    // Fetch user profile and donations data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/pro/${userId}`);
        setUser(response.data.user);
        setDonations(response.data.donations);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchData();
  }, [userId, navigate]);

  

  return (
    <div className="min-h-screen bg-white p-4 text-black">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center py-10">Profile Page</h1>
        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">User Information</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* <p><strong>Address:</strong> {donations[0]?.address || 'N/A'}</p>
          <p><strong>Mobile Number:</strong> {donations[0]?.mobile_no || 'N/A'}</p> */}
        </div>
        <h2 className="text-3xl font-semibold text-center py-10">Donation Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Food Name</th>
                <th className="py-2 px-4 border-b">Food Type</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Serves</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Mobile_number</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{donation.foodname}</td>
                  <td className="py-2 px-4 border-b">{donation.foodtype}</td>
                  <td className="py-2 px-4 border-b">{donation.category}</td>
                  <td className="py-2 px-4 border-b">{donation.quantity}</td>
                  <td className="py-2 px-4 border-b">{donation.serves}</td>
                  <td className="py-2 px-4 border-b">{new Date(donation.date).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{donation.address}</td>
                  <td className="py-2 px-4 border-b">{donation.mobile_no}</td>
                  <td className="py-2 px-4 border-b">{donation.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
