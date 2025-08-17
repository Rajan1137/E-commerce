import React from "react";

const collections = [
  {
    id: 1,
    title: "urbanBackpack.png",
    description: "Sleek and stylish backpacks perfect for city life.",
    img: "Urban.png",
  },
  {
    id: 2,
    title: "treval.png",
    description: "Must-have bags and accessories for your next trip.",
    img: "treval.png",
  },
  {
    id: 3,
    title: "Outdoor-Gear.png",
    description: "Durable backpacks and kits for outdoor adventures.",
    img: "Outdoor-Gear.png",
  },
];

const Collection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Collections</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={collection.img}
              alt={collection.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{collection.title}</h2>
              <p className="text-gray-600">{collection.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
