import "../Style/Home.css";
function Filter() {
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
          <br/>
          <input type="checkbox" name="group1" id={`inline-3`}></input>
          <label>Out Of Stock</label>
          <br/>
          <input type="checkbox" name="group1" id={`inline-4`}></input>
          <label>Fast Delivery Only </label>

          // rating Filter
{/* 
          <span>
            <label >Rating :</label>
            <Rating rating={byRating} style={{curser:"pointer"}}></Rating>
          </span> */}
        </div>

        <button className="Clear-button">Clear Filter </button>
      </div>
    </>
  );
}
export default Filter;
