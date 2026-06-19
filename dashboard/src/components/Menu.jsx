import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  
  const [username, setUsername] = useState("Loading...");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BURL}/`,
          {}, {headers: { Authorization: `Bearer ${token}` }}
        );
        console.log("Backend response data:", data);
        if (data && data.user) setUsername(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);
  
  const getInitials = (name) => {
    if (!name || name === "Loading..." || name === "Error loading") return "?";
    
    const trimmedName = name.trim();

    // Scenario 1: Name contains spaces (e.g., "Srishty Gupta")
    const parts = trimmedName.split(/\s+/);
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }

    // Scenario 2: Single word with capital letters (e.g., "SrishtyGupta")
    const capitals = trimmedName.match(/[A-Z]/g);
    if (capitals && capitals.length > 1) {
      return (capitals[0] + capitals[1]).toUpperCase(); // Takes 'S' and 'G'
    }

    // Scenario 3: Fallback for all lowercase single words (e.g., "srishty")
    return trimmedName.slice(0, 2).toUpperCase();
  };

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Kietlogo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{getInitials(username)}</div>
          <p className="username">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;