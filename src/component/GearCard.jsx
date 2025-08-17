import React from "react";
import { Link } from "react-router-dom";

const GearCard = ({ id, image, title, price, colors = [] }) => {
  // Public folder ke liye correct image path
  const imagePath = image?.startsWith("/") ? image : `/${image}`;

  return (
    <Link
      to={`/product/${id}`}
      className="block bg-white rounded-xl p-4 shadow hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Product Image */}
      <img
        src={imagePath}
        alt={ "Product Image"}
        className="w-full h-48 object-contain mb-4"
        onError={(e) => (e.target.src = "/fallback.jpg")} // fallback image
      />

      {/* Product Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Product Price */}
      <p className="text-gray-700 text-sm mb-3">${price}</p>

      {/* Color Dots */}
      <div className="flex space-x-2">
        {colors.map((color, idx) => (
          <span
            key={idx}
            className="w-4 h-4 rounded-full border shadow-sm"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </Link>
  );
};

export default GearCard;
