import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Brand */}
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight 
          bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          GTK Growth Engine
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm md:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition font-medium ${
                isActive
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl transition font-medium ${
                isActive
                  ? "bg-blue-500/15 text-blue-400"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`
            }
          >
            Dashboard
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
