import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Donate = () => {
  const [fname, setFname] = useState('');
  const [foodtype, setFoodtype] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [serves, setServes] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [mobile_no, setMobile_no] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/donate', {
        fname,
        foodtype,
        category,
        quantity,
        serves,
        date,
        address,
        mobile_no,
        email
      });
      toast.success("Your donation has been submitted successfully!");
      console.log(response.data[0].id);
      const userId=response.data[0].id
      localStorage.setItem("userId",userId);
    } catch (error) {
      console.error('Error submitting donatiosss:', error);
      // toast.error("There was an error submitting your donation.");
    }
  };

  return (
    <section className="w-full h-screen bg-white p-4 text-black">
      <div className="flex flex-col justify-center pb-2 max-w-screen-lg mx-auto h-full">
        <div className="text-center mb-24">
          <p>Donate Food</p>
          <p>Fill out the form to donate food.</p>
        </div>
        <div className="flex justify-center items-center p-8">
          <form className="flex flex-col w-full md:w-1/2 border-black" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="fname"
              placeholder="Food Name"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setFname(e.target.value)}
            />
            <select
              required
              name="foodtype"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setFoodtype(e.target.value)}
            >
              <option value="" disabled selected>Select Food Type</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>
            <select
              required
              name="category"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled selected>Select Category</option>
              <option value="raw-food">Raw Food</option>
              <option value="cooked-food">Cooked Food</option>
              <option value="packed-food">Packed Food</option>
            </select>
            <input
              required
              type="number"
              name="quantity"
              placeholder="Quantity (in kg)"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              required
              type="text"
              name="serves"
              placeholder="Serves (number of people)"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setServes(e.target.value)}
            />
            <input
              required
              type="date"
              name="date"
              placeholder="Enter date"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setDate(e.target.value)}
            />
            <select
              required
              name="address"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setAddress(e.target.value)}
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
            <input
              required
              type="tel"
              pattern="[0-9]{10}"
              name="phone"
              placeholder="Your Mobile Number (10 digits)"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setMobile_no(e.target.value)}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email as you logged in"
              className="p-2 my-2 bg-transparent border-2 rounded-md border-black text-black focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Donate Food
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Donate;
