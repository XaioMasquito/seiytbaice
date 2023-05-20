import React, { useState } from "react";
import logo from "./UI/logo.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import OffCanvasExample from "./UI/A";
import "../css/header.css"
const Header = () => {
  const [openShop, setOpenShop]=useState(true)
  function openShopCar(){
    setOpenShop(false)

  }
  function closedShopCar(){
    setTimeout(()=>{
      setOpenShop(true)
    }, 2000)
  }
  const [PpenShop, setPpenShop]=useState(true)
  function PpenShopCar(){
    setPpenShop(!PpenShop)
  }
  return (
    <div>
      <header className="header_1" >
        <nav className="nav_1">
          <img className="nav_1_img" src={logo} alt="aa" />
        </nav>
        <nav className="nav_2">
          <ul className="nav_2_ul">
            <li className="ul_li">
              <Link className="a_href" to="/">
                Home
              </Link>
            </li>
            <li className="ul_li">
              <Link className="a_href" to="/shop">
                Shop
              </Link>
            </li>
            <li className="ul_li">
              <Link className="a_href" to="/blog">
                Blog
              </Link>
            </li>
            <li className="ul_li">
              <Link className="a_href" to="/">
                Pages
                
              </Link>
            </li>
            <li className="ul_li">
              <Link className="a_href" to="/about">
                About Us
              </Link>
            </li>
            <li className="ul_li">
              <Link className="a_href" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="nav_3">
        <div className="rr">
            <p className="u_p" onMouseMove={openShopCar} onMouseOut={closedShopCar}><FontAwesomeIcon icon={faCartShopping} /></p>
            <p className="u_p" onMouseMove={PpenShopCar} onMouseOut={PpenShopCar}><FontAwesomeIcon icon={faMagnifyingGlass}/></p>
            <p className="u_p1"><FontAwesomeIcon icon={faBars} /><OffCanvasExample placement={'end'} name={'end'} /></p></div>
        </nav>
        <div  onMouseMove={openShopCar} onMouseOut={closedShopCar} className={`wer_kar ${openShop?'close':''}`}>
          
        </div>
        <input  onMouseMove={openShopCar} onMouseOut={openShopCar} placeholder="Search" className={`input ${PpenShop?'a':'b'}`}/>
          

      </header>
    </div>
  );
};

export default Header;
