import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
              PrimeTrade<span className="text-gray-900">AI</span>
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex items-center space-x-4">
            {!token ? (
              <>
                <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition">
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm hover:shadow-md"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <button 
                onClick={logout} 
                className="text-gray-500 hover:text-red-600 font-medium px-3 py-2 transition"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;