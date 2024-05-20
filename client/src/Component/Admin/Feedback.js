import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feedback() {
  const [donatorFeedback, setDonatorFeedback] = useState([]);
  const [deliveryPersonFeedback, setDeliveryPersonFeedback] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const donatorResponse = await axios.get("http://localhost:5000/feedback/mail");
        setDonatorFeedback(donatorResponse.data);

        const deliveryPersonResponse = await axios.get("http://localhost:5000/deliverer/feedback");
        setDeliveryPersonFeedback(deliveryPersonResponse.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="flex">
    <div className="w-1/2 p-4 border-r border-gray-300">
      <h2 className="text-lg  text-center font-semibold mb-4 border-b pb-2">Donator Feedback</h2>
      {donatorFeedback.map((feedback, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm">Email: {feedback.email}</p>
          <p className="text-sm">Message: {feedback.message}</p>
        </div>
      ))}
    </div>

    <div className="w-1/2 p-4">
      <h2 className="text-lg text-center font-semibold mb-4 border-b pb-2">Delivery Person Feedback</h2>
      {deliveryPersonFeedback.map((feedback, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm">Email: {feedback.email}</p>
          <p className="text-sm">Message: {feedback.message}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Feedback;
