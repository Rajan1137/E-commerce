import React from "react";

const accessoriesData = [
  { id: 1, name: "Leather Wallet", price: "$25" },
  { id: 2, name: "Sunglasses", price: "$40" },
  { id: 3, name: "Watch Strap", price: "$15" },
  { id: 4, name: "Keychain", price: "$5" },
];

const Accessories = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Accessories Collection</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {accessoriesData.map((item) => (
          <div
            key={item.id}
            className="border rounded-md p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
