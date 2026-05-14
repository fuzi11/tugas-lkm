import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoLkm from "../assets/Logo LKM IF2.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Member", to: "/anggota" },
  { label: "Materi", to: "/materi" },
  { label: "Swot", to: "/swot" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25"
        : "text-slate-200 hover:bg-white/10 hover:text-cyan-200"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 text-white shadow-lg shadow-blue-950/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/30 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
            <img
              src={logoLkm}
              alt="Logo LKM Informatika 2026"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <h1 className="font-extrabold tracking-tight text-white">
              Kelompok 18
            </h1>
            <p className="text-xs font-semibold text-cyan-300">
              LKM Informatika 2026
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1 shadow-inner md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-xl font-bold text-white shadow-sm transition-all duration-300 hover:bg-white/20 hover:text-cyan-200 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? "x" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 shadow-lg md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 shadow-md"
                      : "bg-white/10 text-slate-200 hover:bg-white/15 hover:text-cyan-200"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
