import { useState } from "react";
import {  CartState } from "../Context/Context";
import "../Style/Navbar.css";
import '../Style/Home.css'
import DropDown from "./DropDown";
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
          <h>ORDER_NOW</h>
        </div>
        <input
          className="searchbar"
          placeholder="Search For Products..."
          type="text"
        ></input>
        <button onClick={dropDownCart}>
          <i class="fa-sharp fa-solid fa-cart-plus"></i> <span>{cart.length}</span>{" "}
          <i class="fa-solid fa-caret-down"></i>
        </button>

        {/* {isDropdownVisible ? (<DropDown></DropDown>): (<span></span>)} */}
      </div>
      
    </>
  );
}
export default Navbar;
