 import { useState } from 'react';
 import { Link } from 'react-router';
 import {Home,BookOpen,User} from 'lucide-react'
 
function Header(){
  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/catalog", icon: BookOpen, label: "Catalog" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="bg-[#0f172a] shadow-lg sticky top-0 z-10 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#6366f1]">DevTrack</h1>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition duration-150 ease-in-out font-medium"
            >
              <item.icon size={20} className="stroke-current" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Header