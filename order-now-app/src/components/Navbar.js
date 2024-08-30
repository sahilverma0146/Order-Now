import '../Style/Navbar.css';
function Navbar() {

  return (
    <>
      <div className="Navbar">
     
        <div>
          <h>ORDER_NOW</h>
        </div>
        <input placeholder="Search For Products..." type="text"></input>
        <button><i class="fa-sharp fa-solid fa-cart-plus"></i> <span>5</span> <i class="fa-solid fa-caret-down"></i></button>
      </div>
    </>
  );
}
export default Navbar;
