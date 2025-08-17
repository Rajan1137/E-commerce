import React from "react";
// import { CartProvider } from "./context/CartContext";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import HeroSection from "./HeroSection";
import TravelPackSection from "./TravelpackSection";
import BackpackProducts from "./backpackProducts";
import GearEssentials from "./GearEssentials";
import GoToTravelPack from "./GoToTravelPack";
import Footer from "./component/Footer";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Accessories from "./component/Accessories";
import Service from "./Service";
import Gifting from "./Gifting";
import Collection from "./component/Collection";
import GearCard from "./component/GearCard";
import GiftingCollection from "./component/GiftingCollection";
import Backpack from "./Backpack";



const App = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar har page me show hoga */}
      <Navbar />

      {/* Routes ka setup */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TravelPackSection />
              <BackpackProducts />
              <GearEssentials />
              
            </>
          }
        />

        {/* Alag Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/GearCard" element={<GearCard />} />
         <Route path="/gifting-collection" element={<GiftingCollection />} />
         <Route path="/backpack" element={<Backpack />} />
         <Route path="/Footer" element={<Footer />} />
     
         

  
      </Routes>
    </div>
  );
};

export default App;

