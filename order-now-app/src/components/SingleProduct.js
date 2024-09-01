import "../Style/Home.css";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

function SingleProduct({ prod }) {

  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(" your cart is :", cart);
  return (
    <>
      <div className="listheader">
        <div className="title">
          <img src={prod.image} alt="product images"></img>
        </div>
        <div>
          {prod.name}
          {/* <span>${prod.price.spilt(".")[0]}</span> */}
        </div>
        <div>
          <span> ₹</span> {prod.price}
        </div>
        <div>
          {prod.fastDelivery ? (
            <div> fast Delivery </div>
          ) : (
            <div> 4 days delivery</div>
          )}
        </div>
        <div>
          <Rating rating={prod.ratings} />
        </div>

        <div style={{ display: "flex", paddingTop: "3rem" }}>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: prod })
              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              disabled={!prod.inStock}
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
            >
              {!prod.inStock ? "Out of Stock" : " Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
