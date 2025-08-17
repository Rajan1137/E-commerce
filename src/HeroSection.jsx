import React from "react";
import { Truck, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Ab ye component ke andar hai

  return (
    <div className="bg-white px-20 sm:p-10 mx-auto">
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Left: Text */}
        <div className="bg-gray-100 rounded-xl h-[550px] flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              GET READY FOR YEAR-END BUSINESS TRAVEL
            </h1>
            <p className="text-gray-700 mb-6">
              Prepare for year-end business travel with ease. Maximize productivity,
              streamline plans, and enjoy stress-free journeys.
            </p>
            <button
              onClick={() => navigate("/products")} // ✅ Navigate yahan chalega
              className="px-6 py-2 border border-black rounded-md font-medium hover:bg-black hover:text-white transition"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="1.png"
            alt="Business Travel"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid sm:grid-cols-4 gap-3 -mt-45">
        {/* Box 1 */}
        <a
          href="#"
          onClick={() => alert("Free Shipping clicked!")}
          className="bg-gray-100 p-10 rounded-xl block hover:bg-gray-200 transition"
        >
          <Truck className="h-5 w-5 mb-2" />
          <h3 className="font-bold text-lg mb-1">FREE SHIPPING</h3>
          <p className="text-sm text-gray-700">
            Instant help from knowledgeable representatives available.
          </p>
        </a>

        {/* Box 2 */}
        <a
          href="#"
          onClick={() => alert("Secure Checkout clicked!")}
          className="bg-gray-100 p-10 rounded-xl block hover:bg-gray-200 transition"
        >
          <ShieldCheck className="h-5 w-5 mb-2" />
          <h3 className="font-bold text-lg mb-1">SECURE CHECKOUT</h3>
          <p className="text-sm text-gray-700">
            Enjoy a safe and smooth purchasing experience every time.
          </p>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
