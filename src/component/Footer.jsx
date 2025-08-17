import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} NEXURA. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
