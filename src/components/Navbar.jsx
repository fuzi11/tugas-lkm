import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold transition-colors duration-300"
      : "text-gray-300 hover:text-white transition-colors duration-300";

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 cursor-pointer hover:scale-105 transition-transform duration-300">
          🚀 LKM IF'25
        </h1>
        <ul className="flex flex-wrap justify-center space-x-6 font-medium text-sm md:text-base">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/anggota" className={linkClass}>Anggota</NavLink></li>
          <li><NavLink to="/materi" className={linkClass}>Materi LKM</NavLink></li>
          <li><NavLink to="/swot" className={linkClass}>SWOT</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;