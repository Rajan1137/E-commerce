import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "201",
    name: "GoTo Travel Backpack",
    price: "₹2,999",
    image: "/products/travel-pack.png",
    colors: ["#000000", "#374151", "#e5e7eb"],
  },
  {
    id: "202",
    name: "Travel Shoe Bag",
    price: "₹799",
    image: "/products/shoe-bag.png",
    colors: ["#111827", "#f59e0b", "#d1d5db"],
  },
  {
    id: "203",
    name: "Tech Organizer Pouch",
    price: "₹1,499",
    image: "/products/tech-pouch.png",
    colors: ["#1f2937", "#4b5563"],
  },
  {
    id: "204",
    name: "Travel Water Bottle",
    price: "₹599",
    image: "/products/water-bottle.png",
    colors: ["#2563eb", "#d97706", "#f43f5e"],
  },
];

const GoToTravelPack = () => {
  return (
    <section className="px-6 md:px-20 py-12 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Go-To Travel Pack
        </h2>
        <Link
          to="/collection/travel-pack"
          className="text-blue-600 hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-xl p-4 shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.price}</p>
            <div className="flex gap-2">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GoToTravelPack;
