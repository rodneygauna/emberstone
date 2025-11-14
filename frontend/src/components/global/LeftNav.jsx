import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaHome,
  FaChartPie,
  FaFireAlt,
  FaFile,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

import "./LeftNav.css";

const LeftNav = () => {
  // Navigation
  const navigate = useNavigate();

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // Clear authentication data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("current_user_id");
    // Trigger storage event for other components
    window.dispatchEvent(new Event("storage"));
    // Navigate to login page
    navigate("/");
    // Show success message
    toast.success("Logged out successfully");
  };

  return (
    <nav className="left-nav">
      <ul className="nav-list">
        <li>
          <a href="#" onClick={handleNavigation("/incidents")}>
            <FaHome />
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <FaChartPie />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" onClick={handleNavigation("/incidents")}>
            <FaFireAlt />
            Incidents
          </a>
        </li>
        <li>
          <a href="#">
            <FaFile />
            Reports
          </a>
        </li>
        <li>
          <a href="#">
            <FaCogs />
            Settings
          </a>
        </li>
      </ul>
      <div className="nav-logout">
        <a href="#" onClick={handleLogout}>
          <FaSignOutAlt />
          Logout
        </a>
      </div>
    </nav>
  );
};

export default LeftNav;
