import { CartState } from "../Context/Context";
import Filter from "./Filter";
import "../Style/Home.css";
import SingleProduct from "./SingleProduct";
function Home() {
  const {
    state: { initial },
  } = CartState();
  console.log(initial);

  return (
    <>
      <div className="home">
        <div className="left-sidebar">
          <Filter></Filter>
        </div>
        <div>
        <div className="right-sidebar">
          {initial.map((prod) => {
            return <SingleProduct prod={prod} key={prod.id}></SingleProduct>;
          })}
        </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

export default Home;
