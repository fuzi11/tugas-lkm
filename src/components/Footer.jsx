import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center border-t border-white/10 bg-slate-950/80 p-3 text-sm text-slate-500">
      <h1>© {new Date().getFullYear()} ... Copyright</h1>
    </div>
  );
};

export default Footer;
