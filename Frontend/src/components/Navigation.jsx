import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">Contact</span>
          </div>

          <div className="flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 bg-[#f6f5f5] hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 bg-[#f6f5f5] hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 bg-[#f6f5f5] hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;