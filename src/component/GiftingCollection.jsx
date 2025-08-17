import React, { useState } from "react";

const GiftingCollection = () => {
  const products = [
    { id: "101", name: "Luxury Gift Box", price: "₹1,299", image: "/gift1.png" },
    { id: "102", name: "Premium Gift Hamper", price: "₹1,599", image: "/gift2.png" },
    { id: "103", name: "Deluxe Gift Set", price: "₹2,499", image: "/gift3.png" },
    { id: "104", name: "Artisan Chocolate Box", price: "₹1,999", image: "/gift4.png" },
  ];

  const [cart, setCart] = useState([]);

  // ✅ Add to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // ✅ Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Total price calculation
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const numericPrice = parseInt(item.price.replace(/[₹,]/g, ""), 10); // Remove ₹ and ,
      return total + numericPrice;
    }, 0);
  };

  return (
    <section className="min-h-screen bg-[#f8f8f8] p-6">
      {/* Products */}
      <h2 className="text-2xl font-bold mb-4">Gifting Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            className="flex flex-col items-center border rounded-md p-4 bg-white shadow-sm hover:shadow-lg transition"
            key={p.id}
          >
            <img
              className="h-48 w-full object-cover rounded-md mb-3"
              src={p.image}
              alt={p.name}
            />
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-700">{p.price}</p>
            <button
              className="w-full bg-[#f0c14b] border border-gray-300 rounded-md p-2 mt-2 hover:bg-yellow-400"
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-12 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">🛒 Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="mt-4 flex justify-between items-center border-t pt-4">
              <h3 className="text-lg font-semibold">Total:</h3>
              <p className="text-lg font-bold text-green-600">
                ₹{getTotalPrice().toLocaleString("en-IN")}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GiftingCollection;
