import React from "react";
import { Link } from "react-router-dom";

const backpacks = [
  { id: 1, name: "Travel Backpack", price: "₹2,499", image: "/backpack4.png" },
  { id: 2, name: "Hiking Backpack", price: "₹3,199", image: "/Hiking-Backpack.png" },
  { id: 3, name: "Laptop Backpack", price: "₹1,899", image: "/Laptop-Backpack.png" },
  { id: 4, name: "Laptop Backpack", price: "₹1,899", image: "/leptopbag-3d-vector.png" },
  { id: 5, name: "Travel Bag", price: "₹1,999", image: "/Travel-Bag.png" },
  { id: 6, name: "Gym Bag", price: "₹1,499", image: "/gym.png" },
  { id: 7, name: "Office Bag", price: "₹2,299", image: "/office-bag.png" },
];

const Backpack = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Backpack Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {backpacks.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            state={{ product }}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="text-blue-600">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Backpack;
