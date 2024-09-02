import { useState } from "react";
import {  CartState } from "../Context/Context";
import "../Style/Navbar.css";
import '../Style/Home.css'
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
function Navbar() {

  const [isDropdownVisible , setIsDropdownVisible] = useState(false)

  const { state:{cart}} = CartState();

  function dropDownCart(){
    // <span> cart is empty</span>
    setIsDropdownVisible(!isDropdownVisible);
    console.log(isDropdownVisible);
    
  }
  return (
    <>

      <div className="Navbar">
        <div>
          <Link to='/home'>ORDER_NOW</Link>
        </div>
        <input
          className="searchbar"
          placeholder="Search For Products..."
          type="text"
        ></input>
        <button className="cartbtn" onClick={dropDownCart}>
          <i class="fa-sharp fa-solid fa-cart-plus"></i> <span>{cart.length}</span>{" "}
          <i class="fa-solid fa-caret-down"></i>
        </button>


      </div>
      {isDropdownVisible ? (<DropDown></DropDown>): (<div/>)}

    </>
  );
}
export default Navbar;
