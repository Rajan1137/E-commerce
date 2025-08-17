// components/Gifting.jsx
import React from "react";
import { Link } from "react-router-dom";

const Gifting = () => {
  return (
    <div className="bg-pink-50 py-12 px-6 text-center rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">🎁 Gifting Section</h1>
      <p className="text-gray-700 max-w-xl mx-auto mb-6">
        Celebrate special moments with our exclusive gifting collection.
        Whether it’s a birthday, anniversary, or just to show you care,
        our curated selection is perfect for every occasion.
      </p>

      <Link
        to="/Gifting-Collection"
        className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
      >
        Explore Gifts
      </Link>
    </div>
  );
};

export default Gifting;
