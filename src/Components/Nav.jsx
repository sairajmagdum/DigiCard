import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

function Nav() {
  const auth = useAuth();
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  });

  return (
    <nav className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 dark:text-white shadow-md">
      <NavLink className="text-gray-900 dark:text-white" style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink className="text-gray-900 dark:text-white" style={navLinkStyles} to="/dashboard">
        Generate QR
      </NavLink>
      <NavLink className="text-gray-900 dark:text-white" style={navLinkStyles} to="/qr">
        Dashboard
      </NavLink>
      {!auth.user ? (
        <NavLink className="text-gray-900 dark:text-white" to="/login">Log In</NavLink>
      ) : (
        <button onClick={auth.logout} className="text-gray-900 dark:text-white">Logout</button>
      )}
    </nav>
  );
}

export default Nav;
