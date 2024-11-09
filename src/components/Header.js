// Header.js

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo_n.png';
import { IconButton } from '@mui/material';
import { Place, Person, ShoppingCart, Menu, Cancel } from '@mui/icons-material'
function Header() {
  const [isVisible, setIsVisible] = useState(false); 

  const toggleVisibility = () => {
      setIsVisible(!isVisible); 
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  
   
  return (
    <>


<div id="sticky_header" className={isScrolled ? 'newClass' : ''}>
<header>
<nav className='desktop_menu'>
      <div className='logo'>
        <Link to="/"><img src={logo} alt="main" /></Link>
      </div>
        <ul className='menu'>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fitness">FITNESS </Link>
          </li>  
          <li>
            <Link to="/sports">SPORTS</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          
         
        </ul>

      <ul className='menu_right'>
        <li>DELHI NCR <Place /></li>
        <li><Link to="#" className='get_app'>GET APP</Link></li>
        <li><Link to="#"><Person /></Link></li>
        <li><Link to="#"><ShoppingCart /></Link></li>
      
      </ul>
 </nav>
</header>
</div>



    <header>
      <nav className='desktop_menu'>
      <div className='logo'>
        <Link to="/"><img src={logo} alt="main" /></Link>
      </div>
        <ul className='menu'>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fitness">FITNESS </Link>
          </li>  
          <li>
            <Link to="/sports">SPORTS</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
         
         
        </ul>

      <ul className='menu_right'>
        <li>DELHI NCR <Place /></li>
        <li><Link to="#" className='get_app'>GET APP</Link></li>
        <li><Link to="#"><Person /></Link></li>
        <li><Link to="#"><ShoppingCart /></Link></li>
      
      </ul>
 </nav>



<div className='mobile_menu'>
<div className='logo'>
        <Link to="/"><img src={logo} alt="main" /></Link>
      </div>

      <div className='mobile_meni_item'>
 
    <IconButton onClick={toggleVisibility}>
                        {isVisible ? <Cancel /> : <Menu /> }
                    </IconButton>

                    {/* Display block or none based on the state */}
                    <div style={{ display: isVisible ? 'block' : 'none' }}>
                    <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fitness">FITNESS </Link>
          </li>  
          <li>
            <Link to="/sports">SPORTS</Link>
          </li>
          <li>
          <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
         
         
        </ul>
                    </div>

      </div>


</div>


    </header>


    </>

    
  );
}




export default Header;