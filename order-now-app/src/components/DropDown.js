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
                  <div>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: el })
                      }
                      className="crtdltbtn"
                    >
                      {" "}
                      <i class="fa-solid fa-delete-left"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/Cart">
              {" "}
              <button>Go To Cart</button>
            </Link>
          </>
        ) : (
          <div>
            {" "}
            <span>cart is empty</span>{" "}
          </div>
        )}
      </div>
    </>
  );
}
export default DropDown;
