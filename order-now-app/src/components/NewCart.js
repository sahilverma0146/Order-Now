import "../Style/Cartpage.css";
import { CartState } from "../Context/Context";
import Rating from "./Rating";
import { useEffect, useState } from "react";
function NewCart() {
  const [price, setPrice] = useState(0);

  const {
    state: { cart },
  } = CartState();

  useEffect(() => {
    console.log("hello");
    setPrice( cart.reduce((acc , curr) => acc + Number(curr.price),0))
  }, [cart]);
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="outer">
            {cart.map((vl) => (
              <>
                <div className="inner">
                  <div>
                    {" "}
                    <img src={vl.image} alt="crt-prodt"></img>{" "}
                  </div>
                  <div style={{ paddingTop: "2rem" }}>{vl.name}</div>
                  <div style={{ paddingTop: "2rem" }}>{vl.price}</div>
                  <div style={{ paddingTop: "2rem" }}>
                    <select title="qty">
                      <option>Qty</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>

                  <div style={{ paddingTop: "2rem" }}>
                    <Rating rating={vl.ratings}></Rating>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="heading"> Subtotal {cart.length} items</div>
          <div>
            {" "}
            total : ₹ <span>{price}</span>
          </div>
          <div>
            {" "}
            <button> Proceed To Payment</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewCart;
