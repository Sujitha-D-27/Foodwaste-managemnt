import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donators = () => {
  const [donators, setDonators] = useState([]);

  useEffect(() => {
    const fetchDonators = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/donators');
        setDonators(response.data);
      } catch (error) {
        console.error('Error fetching donators:', error);
      }
    };
    fetchDonators();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 text-black">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center py-10">Donators</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Food Name</th>
                <th className="py-2 px-4 border-b">Food Type</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Serves</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Mobile Number</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {donators.map((donator, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{donator.username}</td>
                  <td className="py-2 px-4 border-b">{donator.email}</td>
                  <td className="py-2 px-4 border-b">{donator.foodname}</td>
                  <td className="py-2 px-4 border-b">{donator.foodtype}</td>
                  <td className="py-2 px-4 border-b">{donator.category}</td>
                  <td className="py-2 px-4 border-b">{donator.quantity}</td>
                  <td className="py-2 px-4 border-b">{donator.serves}</td>
                  <td className="py-2 px-4 border-b">{new Date(donator.date).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{donator.address}</td>
                  <td className="py-2 px-4 border-b">{donator.mobile_no}</td>
                  <td className="py-2 px-4 border-b">{donator.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donators;
