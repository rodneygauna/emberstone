import { useNavigate } from "react-router-dom";
import { FaHome, FaChartPie, FaFireAlt, FaFile, FaCogs } from "react-icons/fa";

import "./LeftNav.css";

const LeftNav = () => {
  // Navigation
  const navigate = useNavigate();

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
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
    </nav>
  );
};

export default LeftNav;
