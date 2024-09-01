import "../Style/Home.css";
import { useState } from "react";
import Rating from "./Rating";
function Filter() {
  const [rate, setRate] = useState(2);
  return (
    <>
      <div className="sidebar">
        <div className="sidebarhead"> Filter Products</div>
        <div className="sidebar-ele">
          <input type="radio" name="group1" id={`inline-1`}></input>
          <label>Ascending</label>
          <br></br>
          <input type="radio" name="group1" id={`inline-2`}></input>
          <label>Descending</label>
          <br />
          <input type="checkbox" name="group1" id={`inline-3`}></input>
          <label>Out Of Stock</label>
          <br />
          <input type="checkbox" name="group1" id={`inline-4`}></input>
          <label>Fast Delivery Only </label>

          <span>
            <label>Rating :</label>
            <Rating
              vl={console.log("rte")}
              rating={rate}
              onClick={(i) => setRate(i + 1)}
              style={{ curser: "pointer" }}
            ></Rating>
          </span>
        </div>

        <button className="Clear-button">Clear Filter </button>
      </div>
    </>
  );
}
export default Filter;
