// Navbar.js
import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const navigate = useNavigate();

  const toggleMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };
  
  return (
    <nav className='navbar'>
      <span onClick={() => navigate("/")} className='navbar__logo'>Snehit</span>
      {menuClicked ? (
        <FiMenu size={25} className='navbar__menu' onClick={toggleMenuClicked} />
      ) : (
        <FiX size={25} className='navbar__menu' onClick={toggleMenuClicked} />
      )}

      <ul className={menuClicked ? "navbar__list" : "navbar__list navbar__list--active"}>
        {navbarLinks.map((item) => (
          <li className='navbar__item' key={item.title}>
            <Link className='navbar__link' to={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
