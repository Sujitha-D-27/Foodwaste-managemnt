import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-600 text-white flex justify-between py-3 z-50">
      <h1 className="px-3 font-semibold text-5xl">
        Food <span className="px-2 text-green-400">Aid</span>
      </h1>
      <nav className="md:block hidden">
        <ul className="flex gap-8 px-3 pt-2 text-2xl">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
          <Link to="/profile">Profile</Link>

          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
