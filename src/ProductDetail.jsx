import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

const products = [
  { 
    id: "1", 
    name: "Waist Strap", 
    price: "₹499", 
    image: "/waist-strap.png", 
    description: "Comfortable waist strap for extra support during travel. Designed with soft padding to prevent strain on your lower back. Perfect for hikers, travelers, and daily commuters. Adjustable fit ensures compatibility with most backpacks." 
  },
  { 
    id: "2", 
    name: "Sternum Strap", 
    price: "₹399", 
    image: "/sternum-strap.png", 
    description: "Sternum strap to stabilize heavy backpacks and reduce shoulder fatigue. Durable nylon material ensures long-lasting use. Easy to attach and detach, making it perfect for both casual and outdoor use." 
  },
  { 
    id: "3", 
    name: "Knack TSA Lock", 
    price: "₹699", 
    image: "/knack-tsa-lock.png", 
    description: "TSA-approved lock for secure travel. Features a resettable combination for maximum security. The compact and lightweight design is ideal for luggage, backpacks, and lockers. Travel stress-free knowing your belongings are safe." 
  },
  { 
    id: "4", 
    name: "Zip Pouch", 
    price: "₹299", 
    image: "/zip-pouch.png", 
    description: "Compact zip pouch for accessories and essentials. Keep small items like cables, keys, and cards organized. Made with water-resistant fabric for extra protection. Slim and stylish design fits in any bag." 
  },
  { 
    id: "5", 
    name: "Packing Insert", 
    price: "₹599", 
    image: "/packing-insret.png", 
    description: "Packing insert for organized luggage. Helps separate clothes, electronics, and toiletries efficiently. Lightweight yet sturdy material keeps items protected. Ideal for frequent travelers and backpackers." 
  },
  { 
    id: "6", 
    name: "Medium Expanding Bag", 
    price: "₹1,499", 
    image: "/medum-expanding.png", 
    description: "Medium expandable bag for short trips. Expands to fit extra clothing and accessories. Crafted with durable zippers and reinforced stitching for long-term use. Perfect balance between size and portability." 
  },
  { 
    id: "7", 
    name: "Large Expanding Bag", 
    price: "₹1,999", 
    image: "/large-expanding.png", 
    description: "Large expandable bag for long vacations. Spacious compartments allow easy organization. Made with tear-resistant fabric to handle heavy loads. Stylish design makes it ideal for both business and leisure travel." 
  },
  { 
    id: "8", 
    name: "Shoe Bag", 
    price: "₹349", 
    image: "/shoe.png", 
    description: "Durable shoe bag to keep footwear separate in luggage. Prevents dirt and odors from spreading to clothes. Lightweight and easy to carry, perfect for sports, travel, and daily use." 
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  // Click se aaya hua product ya fallback list se find karke
  const product = location.state?.product || products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.price}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
