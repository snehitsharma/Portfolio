import React,{useState} from 'react'
import "./Navbar.css"
import {FiMenu, FiX} from "react-icons/fi"


//const navbarLinks = [{url : "/home", title: "Home"}]
const Navbar = ({navbarLinks}) => {
  const [menuclicked, setMenuclicked] = useState(false);


  const toggleMenuClicked = () => {
    setMenuclicked(!menuclicked);
  };
  
  return (
    <nav className='navbar'>
        <span className='navbar__logo'>Snehit</span>
        {menuclicked ? <FiMenu size={25} className='navbar__menu' onClick={toggleMenuClicked}/> : 
        <FiX size={25} className='navbar__menu' onClick={toggleMenuClicked}/> }

        <ul className= { menuclicked ? "navbar__list" : "navbar__list navbar__list--active"
        }>
            {navbarLinks.map((item) => {
            return (
            <li className='navbar__item' key={item.title}>
            <a className='navbar__link' href={item.url}> {item.title} 
            </a>
            </li>
            );
        })} 
        </ul>
    </nav>
  );
};

export default Navbar