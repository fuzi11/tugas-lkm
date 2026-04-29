import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-white p-3">
      <h1>© {new Date().getFullYear()} ... Copyright</h1>
    </div>
  );
};

export default Footer;
