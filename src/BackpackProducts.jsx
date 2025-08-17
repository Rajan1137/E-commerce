import React from "react";
import { Link } from "react-router-dom";

const backpackProducts = [
  {
    name: "Search Backpack",
    price: "$200",
    img: "/baag1.png",
    colors: ["bg-black", "bg-gray-500", "bg-zinc-700", "bg-neutral-800"],
  },
  {
    name: "Denver Backpack",
    price: "$140",
    img: "/bag2.png",
    colors: ["bg-blue-900", "bg-slate-500", "bg-gray-600", "bg-neutral-700"],
  },
  {
    name: "Swift Carry Backpack",
    price: "$80",
    img: "/bag3.png",
    colors: ["bg-zinc-800", "bg-gray-500", "bg-neutral-400", "bg-black"],
  },
  {
    name: "Roam Backpack",
    price: "$122",
    img: "/bag4.png",
    colors: ["bg-indigo-900", "bg-slate-700", "bg-neutral-500", "bg-black"],
  },
];

const BackpackCollection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {/* Top Heading */}
      <div className="mb-10">
        <p className="text-xs tracking-widest font-semibold text-gray-500 uppercase">
          BACKPACK COLLECTION
        </p>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-black tracking-tight">
            BROWSE BACKPACK COLLECTION
          </h2>
          <Link
            to="/backpack"
            className="border border-black rounded-full px-4 py-1 text-sm hover:bg-black hover:text-white transition"
          >
            Show More
          </Link>
        </div>
        <p className="mt-4 text-gray-600 max-w-xl">
          Shop our stylish backpack collection, featuring trendy designs,
          versatile styles, and exceptional quality for every adventure.
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-5 gap-6 items-start">
        {/* Left Image Banner */}
        <div className="relative col-span-2 h-full">
          <img
            src="/bag.avif"
            alt="Person carrying a backpack"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-6 left-4 bg-black text-white p-5 rounded-lg max-w-xs">
            <h3 className="text-xl font-black mb-2 uppercase">
              Get Ready for Year
            </h3>
            <p className="text-sm mb-4">
              Make business travel easier with our patented 2-in-1 work plus
              suitcase backpacks...
            </p>
            <button className="px-4 py-1 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Explore
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="col-span-3 grid sm:grid-cols-2 gap-4">
          {backpackProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-lg transition"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={`${item.name} - ${item.price}`}
                  className="w-full object-contain mb-3 transform transition duration-300 hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <p className="text-sm text-gray-800 font-semibold">{item.price}</p>
              <div className="flex space-x-1 mt-2">
                {item.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full border ${color}`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackpackCollection;
