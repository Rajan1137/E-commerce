// src/GearEssentials.jsx
import GearCard from "./component/GearCard"; // ✅ components ka sahi path

const gearItems = [
  {
    image: "/waist-strap.png",
    title: "Waist Strap",
    price: 30,
    colors: ["#424242", "#C2C2C2", "#EAEAEA", "#000000"],
  },
  {
    image: "/sternum-strap.png",
    title: "Sternum Strap",
    price: 10,
    colors: ["#333", "#999", "#CCC"],
  },
  {
    image: "/knack-tsa-lock.png",
    title: "Knack TSA-Approved Lock",
    price: 16,
    colors: ["#222", "#888", "#BBB", "#000"],
  },
  {
    image: "/zip-pouch.png",
    title: "Zip Cord Pouch",
    price: 120,
    colors: ["#111", "#444", "#AAA"],
  },
  {
    image: "/packing-insret.png",
    title: "Packing Insert",
    price: 12,
    colors: ["#404040", "#808080", "#C0C0C0"],
  },
  {
    image: "/medum-expanding.png",
    title: "Medium Expanding",
    price: 30,
    colors: ["#444", "#999", "#CCC"],
  },
  {
    image: "/large-expanding.png",
    title: "Large Expanding",
    price: 135,
    colors: ["#222", "#777", "#AAA"],
  },
  {
    image: "/shoe.png",
    title: "Large Compressible Shoe",
    price: 30,
    colors: ["#333", "#888", "#EEE"],
  },
];

const GearEssentials = () => {
  return (
    <div className="px-6 py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-1">
          Accessories
        </h4>
        <h2 className="text-4xl font-black mb-2">Backpack Gear Essentials</h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Discover backpack gear essentials designed for functionality and
          style, ensuring you're prepared for any adventure ahead.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gearItems.map((item, index) => (
            <GearCard key={index} id={index + 1} {...item} />
          ))}
        </div>

        <div className="mt-6 text-right">
          <button className="px-5 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-100">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};


export default GearEssentials;
