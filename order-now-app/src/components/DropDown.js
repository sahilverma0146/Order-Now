import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";
import "../Style/Home.css";
function DropDown() {

  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <div className="dropdown">
        {cart.length > 0 ? (
          <>
            <div>
              {cart.map((el) => (
                <div className="dropdownlist">
                  <div>
                    <img src={el.image} alt="prod img"></img>
                  </div>
                  <div>{el.name}</div>
                  <div
                    
                  >
                    <div onClick={()=>dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: el,
                    })}>
                      <i class="fa-solid fa-delete-left"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              {" "}
              <Link to="/newCart">
                <button>Go To Cart</button>
              </Link>
            </div>
          </>
        ) : (
          <div>
            <span>cart is empty</span>{" "}
          </div>
        )}
      </div>
    </>
  );
}
export default DropDown;
