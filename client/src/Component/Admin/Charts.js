import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

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

  useEffect(() => {
    if (donatorData.length > 0 && deliveryPersonData.length > 0) {
      renderCharts();
    }
  }, [donatorData, deliveryPersonData]);

  const renderCharts = () => {
    const donatorLabels = donatorData.map(item => item.username);
    const donatorCounts = donatorData.map(item => item.donation_count);

    const deliveryPersonLabels = deliveryPersonData.map(item => item.username);
    const deliveryPersonCounts = deliveryPersonData.map(item => item.delivery_count);

    const donatorCtx = document.getElementById('donatorChart').getContext('2d');
    new Chart(donatorCtx, {
      type: 'bar',
      data: {
        labels: donatorLabels,
        datasets: [{
          label: 'Donation Count',
          data: donatorCounts,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const deliveryPersonCtx = document.getElementById('deliveryPersonChart').getContext('2d');
    new Chart(deliveryPersonCtx, {
      type: 'bar',
      data: {
        labels: deliveryPersonLabels,
        datasets: [{
          label: 'Delivery Count',
          data: deliveryPersonCounts,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  return (
    <div>
      <h2>Donators</h2>
      <canvas id="donatorChart"></canvas>

      <h2>Delivery Persons</h2>
      <canvas id="deliveryPersonChart"></canvas>
    </div>
  );
}

export default GraphicalRepresentation;
