import React from "react";
import { useParams } from "react-router-dom";
import {useState} from "react";




const ProductDetail = () => {
                                  
  const [cart, setCart] = useState([]);

    const products = [
      { id: "101", name: "Waist Strap", price: "₹₹499", image: "/waist-strap.png", description: "Comfortable waist strap for extra support during travel. Designed with soft padding to prevent strain on your lower back. Perfect for hikers, travelers, and daily commuters. Adjustable fit ensures compatibility with most backpacks." },
      { id: "102", name: "Sternum Strap", price: "₹399", image: "/sternum-strap.png" },
      { id: "103", name: "Knack TSA Lock", price: "₹699", image: "/knack-tsa-lock.png" }, 
      { id: "104", name: "Zip Pouch", price: "₹299", image: "/zip-pouch.png" },
      { id: "103", name: "Packing Insert", price: "₹599", image: "/packing-insret.png" },
      { id: "104", name: "Medium Expanding Bag", price: "₹1,499", image: "/medum-expanding.png" },
      { id: "104", name: "Large Expanding Bag", price: "₹1,999", image: "/large-expanding.png" },
      { id: "104", name: "Shoe Bag", price: "₹349", image: "/shoe.png" },
    ];
  
    
  
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
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
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
            {/* <p className="text-gray-700">{p.description}</p> */}
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

export default ProductDetail;
