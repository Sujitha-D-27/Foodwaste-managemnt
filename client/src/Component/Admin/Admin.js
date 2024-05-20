import React from 'react';
import { NavLink } from 'react-router-dom';
import adminimg from '../Images/food.gif';
const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-gray-100 w-64">
        <nav className="p-4">
          <ul>
            <li>
              <NavLink
                exact
                to="/donators"
                className="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                activeClassName="font-bold bg-gray-700"
              >
                Donators
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delivery-persons"
                className="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                activeClassName="font-bold bg-gray-700"
              >
                Delivery Persons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/images"
                className="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                activeClassName="font-bold bg-gray-700"
              >
                Images
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/charts"
                className="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                activeClassName="font-bold bg-gray-700"
              >
                Charts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                activeClassName="font-bold bg-gray-700"
              >
                Feedback
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
      <div className="flex flex-col flex-1">
        {/* Add your content here */}
        <h1 className="text-2xl  text-center font-bold p-4">Admin Dashboard</h1>
        <div className="p-4">
          {/* Placeholder content */}
          <img className="h-screen w-full object-cover" src={adminimg} alt="Delivery Image" />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
