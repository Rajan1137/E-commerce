import React from 'react';
import { MoveUpRight, Shield, Droplets, User } from 'lucide-react'; // icons

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white shadow-md p-6 rounded-xl border text-center">
    <Icon className="mx-auto h-6 w-6 mb-4" />
    <h3 className="text-lg font-black uppercase mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const GoToTravelPack = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold tracking-wide text-gray-500">BEST PRODUCT</p>
        <h2 className="text-4xl font-black tracking-tight mt-2">GO-TO TRAVEL PACK</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Designed for adventures, this pack offers ample space, durability, and comfort for all your journeys ahead.
        </p>
      </div>

      {/* Grid Section */}
   <div className="flex flex-col items-center justify-center px-4 sm:px-10">
  <div className="grid sm:grid-cols-3 gap-8 items-center">
    {/* LEFT FEATURE CARDS */}
    <div className="space-y-6">
      <FeatureCard
        icon={MoveUpRight}
        title="Spacious Design"
        description="Holds essentials and extras with ample organized space."
      />
      <FeatureCard
        icon={Droplets}
        title="Weather Resistant"
        description="Durable material keeps belongings safe in any weather."
      />
    </div>

    {/* CENTER IMAGE */}
    <div className="flex justify-center">
      <img
        src="bag.png"
        alt="Backpack"
        className="w-[250px] sm:w-[300px] md:w-[350px]"
      />
    </div>

    {/* RIGHT FEATURE CARDS */}
    <div className="space-y-6">
      <FeatureCard
        icon={User}
        title="Comfort Fit"
        description="Padded straps offer all-day comfort and support."
      />
      <FeatureCard
        icon={Shield}
        title="Tech Protection"
        description="Dedicated compartments for laptops and devices."
      />
    </div>
  </div>
</div>


    </div>
  );
};

export default GoToTravelPack;
