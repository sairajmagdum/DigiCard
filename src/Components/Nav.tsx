// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./Auth";

// function Nav() {
//   const auth = useAuth();
//   const navLinkStyles = ({ isActive }) => ({
//     fontWeight: isActive ? "bold" : "normal",
//     textDecoration: isActive ? "none" : "underline",
//   });

//   return (
//     <nav className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 dark:text-white shadow-md">
//       <NavLink className="text-gray-900 dark:text-white" style={navLinkStyles} to="/">
//         Home
//       </NavLink>
//       <NavLink className="text-gray-900 dark:text-white" style={navLinkStyles} to="/dashboard">
//         Generate QR
//       </NavLink>
//       <NavLink className="text-gray-900 dark:text-white" style={navLinkStyles} to="/qr">
//         Dashboard
//       </NavLink>
//       {!auth.user ? (
//         <NavLink className="text-gray-900 dark:text-white" to="/login">Log In</NavLink>
//       ) : (
//         <button onClick={auth.logout} className="text-gray-900 dark:text-white">Logout</button>
//       )}
//     </nav>
//   );
// }

// export default Nav;

import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
import React from "react";
import { useTheme } from "./ThemeContext";

const Nav: React.FC = () => {
  const auth = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`flex justify-between items-center p-4 shadow-md 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      
      <div className="flex gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : "underline"}>
          Home
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-bold" : "underline"}>
          Generate QR
        </NavLink>
        <NavLink to="/qr" className={({ isActive }) => isActive ? "font-bold" : "underline"}>
          Dashboard
        </NavLink>
        {!auth.user ? (
          <NavLink to="/login" className={({ isActive }) => isActive ? "font-bold" : "underline"}>
            Log In
          </NavLink>
        ) : (
          <button onClick={auth.logout} className="text-red-500 hover:text-red-700">
            Logout
          </button>
        )}
      </div>

      {/* 🌗 Theme Toggle PNG Anchor */}
      <a href="#" onClick={(e) => { e.preventDefault(); toggleTheme(); }}>
        <img 
          src={theme === "dark" ? "/src/assets/brightness.png" : "/src/assets/moon2.png"} 
          alt="Toggle Theme" 
          className="w-6 h-6 cursor-pointer"
        />
      </a>

    </nav>
  );
};

export default Nav;

