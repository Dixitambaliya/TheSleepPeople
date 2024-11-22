import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';  
import logo from '../../assets/logo.png';   

const Navbar = () => {
  return (
    <header className="bg-white shadow-md border-b-[3px] border-orange-500">  {/* Added red border here */}
 
      <div className="bg-gray-500 text-white text-sm py-2 text-center">
        Boxing Day Event ends in 3d 11h 07m 52s <span className="underline">Shop Now</span> &rarr;
      </div>
 
      <nav className="flex justify-between items-center px-4 lg:px-16 py-4">
        <div className="flex items-center">
          <img
            src={logo}  
            alt="Logo"
            className="h-8 mr-2"
          />
          <span className="font-bold text-xl text-green-700">The Sleep People</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="text-green-600 font-semibold"><a href="#">Home</a></li>
          <li><a href="#">Sleep People</a></li>
          <li><a href="#">Brand</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Sales</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="flex space-x-4 text-green-600">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-gray-600 focus:outline-none">

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className="bg-orange-50 py-3 flex justify-center space-x-10 text-sm text-gray-600 font-bold">
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="Free delivery">🚚</span>
          <span>Free delivery</span>
        </div>
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="Excellent Service">🛠</span>
          <span>Excellent Service</span>
        </div>
        <div className="flex items-center space-x-2 ">
          <span role="img" aria-label="Save Money">💰</span>
          <span>Save Money</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
