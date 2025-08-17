import React from "react";
import { Link } from "react-router-dom"; // ✅ sahi jagah se import
import { FaSearch, FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi2";

const Navbar = () => {
  return (
    
    <div className="w-full font-sans">
      {/* 🔲 Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm rounded-md">
        Enjoy an exclusive 10% coupon for your first purchase.
      </div>

      {/* 🟦 Navbar */}
      <div className="flex items-center justify-between px-8 py-4 bg-white shadow">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer">
          <Link to="/">NEXURA</Link>
        </div>

        {/* Menu Items */}
        <div className="flex gap-6 text-sm text-gray-700">
          {[
            { name: "Latest Products", path: "/products" },
            { name: "Backpack", path: "/backpack" },
            { name: "Accessories", path: "/accessories" },
            { name: "Collection", path: "/collection" },
            { name: "Gifting", path: "/gifting" },
            { name: "Service", path: "/service" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-black cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
            
          ))}
          
        </div>

        {/* Icons */}
        <div className="flex gap-6 text-xl text-gray-800">
          <FaSearch className="cursor-pointer hover:text-black" />
          <FaShoppingCart className="cursor-pointer hover:text-black" />
          <HiOutlineBookmark className="cursor-pointer hover:text-black" />
          <FaRegUserCircle className="cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
