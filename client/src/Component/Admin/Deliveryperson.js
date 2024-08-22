import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Deliverpersons = () => {
  const [deliverPersons, setDeliverPersons] = useState([]);

  useEffect(() => {
    const fetchDeliverPersons = async () => {
      try {
        const response = await axios.get('https://foodaid.onrender.com/admin/delivery-persons');
        setDeliverPersons(response.data);
      } catch (error) {
        console.error('Error fetching delivery persons:', error);
      }
    };
    fetchDeliverPersons();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 text-black">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center py-10">Delivery Persons</h1>
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
              {deliverPersons.map((person, index) => (
                person.donations.map((donation, i) => (
                  <tr key={`${index}-${i}`}>
                    <td className="py-2 px-4 border-b">{person.username}</td>
                    <td className="py-2 px-4 border-b">{person.email}</td>
                    <td className="py-2 px-4 border-b">{donation.foodname}</td>
                    <td className="py-2 px-4 border-b">{donation.foodtype}</td>
                    <td className="py-2 px-4 border-b">{donation.category}</td>
                    <td className="py-2 px-4 border-b">{donation.quantity}</td>
                    <td className="py-2 px-4 border-b">{donation.serves}</td>
                    <td className="py-2 px-4 border-b">{new Date(donation.date).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border-b">{donation.address}</td>
                    <td className="py-2 px-4 border-b">{donation.mobile_no}</td>
                    <td className="py-2 px-4 border-b">{donation.status}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Deliverpersons;
