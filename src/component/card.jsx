// import React from "react";
// import { useCart } from "./CartContext"; // ✅ same folder me hai to "./"

// const card = ({ id, title, price, image }) => {
//   const { addToCart, removeFromCart } = useCart();

//   return (
//     <div className="border rounded-lg p-4 shadow-md">
//       <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
//       <h2 className="text-lg font-bold mt-2">{title}</h2>
//       <p className="text-gray-700">${price}</p>
//       <div className="mt-3 flex gap-2">
//         <button
//           onClick={() => addToCart({ id, title, price, image })}
//           className="bg-green-500 text-white px-3 py-1 rounded"
//         >
//           Add to Cart
//         </button>
//         <button
//           onClick={() => removeFromCart(id)}
//           className="bg-red-500 text-white px-3 py-1 rounded"
//         >
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default card;
