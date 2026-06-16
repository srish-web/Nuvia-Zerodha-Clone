import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleMenuClick = (index) =>{
    setSelectedMenu(index);
  }
  const handleProfileClick = (index) =>{
    setIsDropdown(!isDropdown);
  }

  const MenuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" alt="img" style={{ width: "30px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={()=>handleMenuClick(0)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 0 ? activeMenuClass: MenuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={()=>handleMenuClick(1)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 1 ? activeMenuClass: MenuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={()=>handleMenuClick(2)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 2 ? activeMenuClass: MenuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={()=>handleMenuClick(3)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 3 ? activeMenuClass: MenuClass}>Positions</p>
            </Link>
          </li> 
          <li>
            <Link to="/funds" onClick={()=>handleMenuClick(4)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 4 ? activeMenuClass: MenuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={()=>handleMenuClick(5)} style={{textDecoration:"none"}}>
              <p className={selectedMenu === 5 ? activeMenuClass: MenuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={()=>handleProfileClick(true)}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;