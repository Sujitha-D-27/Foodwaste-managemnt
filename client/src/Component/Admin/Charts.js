import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GraphicalRepresentation() {
  const [donatorData, setDonatorData] = useState([]);
  const [deliveryPersonData, setDeliveryPersonData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const donatorResponse = await axios.get("http://localhost:5000/admin/donators");
        setDonatorData(donatorResponse.data);

        const deliveryPersonResponse = await axios.get("http://localhost:5000/admin/delivery-persons");
        setDeliveryPersonData(deliveryPersonResponse.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const renderCharts = () => {
    const donatorLabels = donatorData.map(item => item.username);
    const donatorCounts = donatorData.map(item => item.donation_count);

    const deliveryPersonLabels = deliveryPersonData.map(item => item.username);
    const deliveryPersonCounts = deliveryPersonData.map(item => item.delivery_count);

    const donatorDataSet = {
      labels: donatorLabels,
      datasets: [{
        label: 'Donations',
        data: donatorCounts,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };

    const deliveryPersonDataSet = {
      labels: deliveryPersonLabels,
      datasets: [{
        label: 'Deliveries',
        data: deliveryPersonCounts,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    return (
      <div>
        <h2>Donators</h2>
        <Bar
          data={donatorDataSet}
          options={{
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />

        <h2>Delivery Persons</h2>
        <Bar
          data={deliveryPersonDataSet}
          options={{
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />
      </div>
    );
  };

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {donatorData.length > 0 && deliveryPersonData.length > 0 ? renderCharts() : <p>Loading data...</p>}
    </div>
  );
}

export default GraphicalRepresentation;
