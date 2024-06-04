import React from "react";
import Login from "./Component/loginnn/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./Component/loginnn/Signup";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Donate from "./Component/Donateform/Donate";
import Profile from "./Component/Profile/Profile";
import Deliver from "./Component/loginnn/Deliver";
import Dhome from "./Component/Dhome/Dhome";
import AdminDashboard from "./Component/Admin/Admin";
import Donators from "./Component/Admin/Donators";
import Deliveryimages from "./Component/Admin/Deliveryimages";
import Feedback from "./Component/Admin/Feedback";
import Charts from "./Component/Admin/Charts";
import Deliveryperson from "./Component/Admin/Deliveryperson";
import Deliveryfeedback from "./Component/Dhome/Deliveryfeedback";



function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/nav' element={<Navbar/>}></Route>
      <Route path='/main' element={<Hero/>}></Route>
      <Route path='/donateform' element={<Donate/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/deliver' element={<Deliver/>}></Route>
      <Route path='/dhome' element={<Dhome/>}></Route>
      <Route path='/admin' element={<AdminDashboard/>}></Route>
      <Route path='/donators' element={<Donators/>}></Route>
      <Route path='/delivery-persons' element={<Deliveryperson/>}></Route>
      <Route path='/images' element={<Deliveryimages/>}></Route>
      <Route path='/feedback' element={<Feedback/>}></Route>
      <Route path='/charts' element={<Charts/>}></Route>
      <Route path='/deliveryfeedback' element={<Deliveryfeedback/>}></Route>
      
    </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
