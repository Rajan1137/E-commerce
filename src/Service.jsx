import React from "react";

const Services = () => {
  const services = [
    { title: "Free Shipping", desc: "Get your products delivered for free.", icon: "🚚" },
    { title: "Secure Payment", desc: "100% secure payment protection.", icon: "💳" },
    { title: "24/7 Support", desc: "We’re here to help anytime.", icon: "📞" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
