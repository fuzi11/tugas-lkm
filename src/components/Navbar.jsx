import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1>Kelompok 18</h1>
          <div className="hidden md:inline space-x-6">
            <a
              href="/"
              className="hover:text-(--text-primary) transition duration-300"
            >
              Home
            </a>
            <a
              href="/anggota"
              className="hover:text-(--text-primary) transition duration-300"
            >
              Member
            </a>
            <a
              href="/materi"
              className="hover:text-(--text-primary) transition duration-300"
            >
              Materi
            </a>
            <a
              href="/swot"
              className="hover:text-(--text-primary) transition duration-300"
            >
              Swot
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline cursor-pointer"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
        {isOpen && (
          <div
            className={`absolute top-full left-0 w-full bg-white flex flex-col py-4 px-4 shadow-lg z-50 ${isOpen ? "border-b border-amber-100" : ""}`}
          >
            <a href="/" className="py-4 hover:text-hover">
              Home
            </a>
            <a href="/anggota" className="py-4 hover:text-hover">
              Member
            </a>
            <a href="/materi" className="py-4 hover:text-hover">
              Materi
            </a>
            <a href="/swot" className="py-4 hover:text-var(--hover)">
              Swor
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
